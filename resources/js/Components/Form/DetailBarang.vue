<template>
    <form @submit.prevent="$emit('submit')">
        <div class="mb-3">
            Kode Detail: <b>{{ barang.kode_terakhir }}</b>
        </div>
        <div class="mb-3">
            <label class="form-label">Nama Detail Barang</label>
            <input
                type="text"
                class="form-control"
                :disabled="detail.processing"
                :class="{ 'is-invalid': detail.errors.nama }"
                v-model="detail.nama"
                @input="detail.clearErrors('nama')"
                placeholder="Masukkan Nama Detail Barang"
            />
            <transition name="fade">
                <div v-if="detail.errors.nama" class="invalid-feedback">
                    {{ detail.errors.nama }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Jumlah Stok Barang</label>
            <div class="input-group">
                <input
                    type="number"
                    min="0"
                    class="form-control"
                    :disabled="detail.processing"
                    :class="{ 'is-invalid': detail.errors.stok }"
                    v-model="detail.stok"
                    @input="detail.clearErrors('stok')"
                    placeholder="Masukkan Jumlah Stok Barang"
                />
                <span class="input-group-text">{{ barang.satuan }}</span>
                <transition name="fade">
                    <div v-if="detail.errors.stok" class="invalid-feedback">
                        {{ detail.errors.stok }}
                    </div>
                </transition>
            </div>
        </div>
        <div class="mb-3">
            <label class="form-label">Jumlah Minimal Stok Barang</label>
            <div class="input-group">
                <input
                    type="number"
                    min="1"
                    class="form-control"
                    :disabled="detail.processing"
                    :class="{ 'is-invalid': detail.errors.stok_min }"
                    v-model="detail.stok_min"
                    @input="detail.clearErrors('stok_min')"
                    placeholder="Masukkan Jumlah Minimal Stok Barang"
                />
                <span class="input-group-text">{{ barang.satuan }}</span>
                <transition name="fade">
                    <div v-if="detail.errors.stok_min" class="invalid-feedback">
                        {{ detail.errors.stok_min }}
                    </div>
                </transition>
            </div>
        </div>
        <div class="mb-3">
            <label class="form-label">Harga Barang</label>
            <div class="input-group">
                <span class="input-group-text">Rp.</span>
                <input
                    type="number"
                    min="0"
                    class="form-control"
                    :disabled="detail.processing"
                    :class="{ 'is-invalid': detail.errors.harga }"
                    v-model="detail.harga"
                    @input="detail.clearErrors('harga')"
                    placeholder="Masukkan Harga Barang"
                />
                <span class="input-group-text">,00</span>
            </div>
            <transition name="fade">
                <div v-if="detail.errors.harga" class="invalid-feedback">
                    {{ detail.errors.harga }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Nama Supplier</label>
            <v-select
                :options="supplier.options"
                :searchable="true"
                :loading="supplier.loading"
                :class="{ 'is-invalid': detail.errors['supplier.id'] }"
                :allow-empty="false"
                :internal-search="false"
                :disabled="detail.processing"
                v-model="detail.supplier"
                placeholder="Pilih supplier"
                class="form-group"
                label="nama"
                track-by="nama"
                select-label=""
                deselect-label="Terpilih"
                selected-label="Terpilih"
                @search-change="getDataSupplier"
                @close="supplier.options = []"
                @open="
                    detail.clearErrors('supplier.id');
                    getDataSupplier('');
                "
            >
                <template #noResult>Data Tidak Ditemukan.</template>
                <template #noOptions>Data Tidak Ada.</template>
            </v-select>
            <transition name="fade">
                <div
                    v-if="detail.errors['supplier.id']"
                    class="invalid-feedback"
                >
                    {{ detail.errors["supplier.id"] }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <input
                class="form-check-input me-2"
                type="checkbox"
                v-model="detail.restok"
            />
            <label
                class="form-check-label user-select-none"
                @click="detail.restok = !detail.restok"
            >
                Perlu direstok
            </label>
        </div>
        <div class="mb-3">
            <button
                type="submit"
                :disabled="detail.processing || detail.supplier.length == 0"
                class="btn btn-primary btn-md shadow-sm me-2"
            >
                SIMPAN
            </button>
            <span
                :class="{
                    disabled: detail.processing || detail.supplier.length == 0,
                }"
                @click="detail.reset()"
                class="btn btn-warning btn-md shadow-sm"
            >
                RESET
            </span>
        </div>
    </form>
</template>
<script>
import VSelect from "vue-multiselect";
import { reactive } from "vue";
export default {
    components: { VSelect },
    props: { detail: Object, barang: Object },
    remember: "detail",
    setup() {
        let fetchData = _.debounce((data, url, content) => {
            data.loading = true;
            axios
                .post(url, content)
                .then((response) => (data.options = response.data))
                .catch((errors) => console.error("error: ", errors))
                .finally(() => (data.loading = false));
        }, 500);

        let supplier = reactive({
            options: [],
            loading: false,
        });

        let getDataSupplier = (value) =>
            fetchData(supplier, "/api/supplier", { value });

        return { supplier, getDataSupplier };
    },
};
</script>
