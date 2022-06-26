<template>
    <form @submit.prevent="$emit('submit')">
        <div class="mb-3">
            <label class="form-label">Kode Barang</label>
            <input
                type="text"
                class="form-control"
                maxlength="3"
                :disabled="barang.processing"
                :class="{ 'is-invalid': barang.errors.kode }"
                v-model="barang.kode"
                @input="barang.clearErrors('kode')"
                placeholder="Masukkan Kode Barang"
            />
            <transition name="fade">
                <div v-if="barang.errors.kode" class="invalid-feedback">
                    {{ barang.errors.kode }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Nama Barang</label>
            <input
                type="text"
                class="form-control"
                :disabled="barang.processing"
                :class="{ 'is-invalid': barang.errors.nama }"
                v-model="barang.nama"
                @input="barang.clearErrors('nama')"
                placeholder="Masukkan Nama Barang"
            />
            <transition name="fade">
                <div v-if="barang.errors.nama" class="invalid-feedback">
                    {{ barang.errors.nama }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Kategori</label>
            <v-select
                :options="kategori.options"
                :searchable="true"
                :loading="kategori.loading"
                :class="{ 'is-invalid': barang.errors['kategori.id'] }"
                :allow-empty="false"
                :internal-search="false"
                :disabled="barang.processing"
                :custom-label="({ kode, nama }) => kode + ' — ' + nama"
                v-model="barang.kategori"
                placeholder="Pilih kategori"
                class="form-group"
                label="nama"
                track-by="nama"
                select-label=""
                deselect-label="Terpilih"
                selected-label="Terpilih"
                @search-change="getDataKategori"
                @close="kategori.options = []"
                @open="
                    barang.clearErrors('kategori.id');
                    getDataKategori('');
                "
            >
                <template #noResult>Data Tidak Ditemukan.</template>
                <template #noOptions>Data Tidak Ada.</template>
            </v-select>
            <transition name="fade">
                <div
                    v-if="barang.errors['kategori.id']"
                    class="invalid-feedback"
                >
                    {{ barang.errors["kategori.id"] }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Satuan</label>
            <v-select
                :options="satuan.options"
                :searchable="true"
                :loading="satuan.loading"
                :class="{ 'is-invalid': barang.errors['satuan.id'] }"
                :allow-empty="false"
                :internal-search="false"
                :disabled="barang.processing"
                v-model="barang.satuan"
                placeholder="Pilih satuan"
                class="form-group"
                label="nama"
                track-by="nama"
                select-label=""
                deselect-label="Terpilih"
                selected-label="Terpilih"
                @search-change="getDataSatuan"
                @close="satuan.options = []"
                @open="
                    barang.clearErrors('satuan.id');
                    getDataSatuan('');
                "
            >
                <template #noResult>Data Tidak Ditemukan.</template>
                <template #noOptions>Data Tidak Ada.</template>
            </v-select>
            <transition name="fade">
                <div v-if="barang.errors['satuan.id']" class="invalid-feedback">
                    {{ barang.errors["satuan.id"] }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <button
                type="submit"
                :disabled="
                    barang.processing ||
                    barang.kategori.length == 0 ||
                    barang.satuan.length == 0
                "
                class="btn btn-primary btn-md shadow-sm me-2"
            >
                SIMPAN
            </button>
            <span
                :class="{
                    disabled:
                        barang.processing ||
                        barang.kategori.length == 0 ||
                        barang.satuan.length == 0,
                }"
                @click="barang.reset()"
                class="btn btn-warning btn-md shadow-sm"
            >
                RESET
            </span>
        </div>
    </form>
</template>
<script>
import VueMultiselect from "vue-multiselect";
import { reactive } from "vue";
import { debounce } from "lodash";

export default {
    components: { VSelect: VueMultiselect },
    props: { barang: Object },
    remember: "barang",
    watch: {
        "barang.kode": function (val) {
            this.barang.kode = this.barang.kode
                .toUpperCase()
                .replaceAll(/[^A-Z]/g, "");
        },
    },
    setup() {
        let defaultValueMultiselect = {
            options: [],
            loading: false,
        };

        let satuan = reactive({ ...defaultValueMultiselect });

        let getDataSatuan = debounce((value) => {
            satuan.loading = true;
            axios
                .post("/api/satuan", { value })
                .then((response) => {
                    satuan.options = response.data;
                })
                .catch((errors) => {
                    console.log("error", errors);
                })
                .finally(() => {
                    satuan.loading = false;
                });
        }, 500);

        let kategori = reactive({ ...defaultValueMultiselect });

        let getDataKategori = debounce((value) => {
            kategori.loading = true;
            axios
                .post("/api/kategori", { value })
                .then((response) => {
                    kategori.options = response.data;
                })
                .catch((errors) => {
                    console.log("error", errors);
                })
                .finally(() => {
                    kategori.loading = false;
                });
        }, 500);

        return {
            satuan,
            getDataSatuan,
            kategori,
            getDataKategori,
        };
    },
};
</script>
