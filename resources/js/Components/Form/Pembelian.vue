<template>
    <form @submit.prevent="$emit('submit')">
        <div class="mb-3">
            <label class="form-label">Pilih Barang</label>
            <div class="row gap-2">
                <div class="col-sm col-12">
                    <v-select
                        :options="barang.options"
                        :searchable="true"
                        :loading="barang.loading"
                        :allow-empty="false"
                        :internal-search="false"
                        :disabled="pembelian.processing"
                        :custom-label="({ kode, nama }) => kode + ' — ' + nama"
                        v-model="barang.selected"
                        placeholder="Pilih Barang"
                        class="form-group"
                        label="nama"
                        track-by="nama"
                        select-label=""
                        deselect-label="Terpilih"
                        selected-label="Terpilih"
                        @search-change="getDataBarang"
                        @close="barang.options = []"
                        @open="
                            detailBarang.selected = null;
                            getDataBarang('');
                        "
                    >
                        <template #noResult>Data Tidak Ditemukan.</template>
                        <template #noOptions>Data Tidak Ada.</template>
                    </v-select>
                </div>
                <div class="col-sm col-12">
                    <v-select
                        :options="detailBarang.options"
                        :searchable="true"
                        :loading="detailBarang.loading"
                        :allow-empty="false"
                        :internal-search="false"
                        :disabled="
                            pembelian.processing ||
                            barang.selected === null ||
                            barang.selected.jumlah_jenis < 1
                        "
                        v-model="detailBarang.selected"
                        placeholder="Pilih Detail Barang"
                        class="form-group"
                        label="nama"
                        track-by="nama"
                        select-label=""
                        deselect-label="Terpilih"
                        selected-label="Terpilih"
                        @search-change="getDataDetailBarang"
                        @close="detailBarang.options = []"
                        @open="getDataDetailBarang('')"
                    >
                        <template #noResult>Data Tidak Ditemukan.</template>
                        <template #noOptions>Data Tidak Ada.</template>
                    </v-select>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <div class="row gap-2">
                <div class="col-sm col-12">
                    <label class="form-label">Jumlah Barang</label>
                    <div class="input-group">
                        <input
                            type="number"
                            class="form-control"
                            min="0"
                            :disabled="
                                pembelian.processing ||
                                detailBarang.selected === null
                            "
                            v-model="detailBarang.jumlah"
                            placeholder="Masukkan jumlah pembelian"
                        />
                        <span
                            class="input-group-text"
                            v-if="barang.selected !== null"
                        >
                            {{ barang.selected.satuan }}
                        </span>
                    </div>
                </div>
                <div class="col-sm col-12">
                    <label class="form-label">Dikembalikan</label>
                    <div class="input-group">
                        <input
                            type="number"
                            min="0"
                            class="form-control"
                            :disabled="
                                pembelian.processing ||
                                detailBarang.selected === null
                            "
                            v-model="detailBarang.kembali"
                            placeholder="Masukkan Jumlah Dikembalikan"
                        />
                        <span
                            class="input-group-text"
                            v-if="barang.selected !== null"
                        >
                            {{ barang.selected.satuan }}
                        </span>
                    </div>
                </div>
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
                    step="100"
                    :disabled="
                        pembelian.processing || detailBarang.selected === null
                    "
                    v-model="detailBarang.harga"
                    placeholder="Masukkan Harga Barang"
                />
                <span class="input-group-text">,00</span>
            </div>
        </div>
        <div class="mb-3">
            <span
                :class="{
                    disabled:
                        pembelian.processing ||
                        barang.selected === null ||
                        detailBarang.selected === null ||
                        detailBarang.jumlah < 1 ||
                        detailBarang.harga < 1,
                }"
                @click="pushBarang(pembelian.barang, detailBarang.selected)"
                class="btn btn-primary btn-md shadow-sm"
            >
                TAMBAH BARANG
            </span>
        </div>
        <hr />
        <div class="mb-3">
            <label class="form-label">Nomor Nota</label>
            <input
                type="text"
                class="form-control"
                :disabled="pembelian.processing"
                :class="{ 'is-invalid': pembelian.errors.no_nota }"
                v-model="pembelian.no_nota"
                @input="pembelian.clearErrors('no_nota')"
                placeholder="Masukkan Nomor Nota pembelian"
            />
            <transition name="fade">
                <div v-if="pembelian.errors.no_nota" class="invalid-feedback">
                    {{ pembelian.errors.no_nota }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Nama Supplier</label>
            <v-select
                :options="supplier.options"
                :searchable="true"
                :loading="supplier.loading"
                :class="{ 'is-invalid': pembelian.errors['supplier.id'] }"
                :allow-empty="false"
                :internal-search="false"
                :disabled="pembelian.processing"
                v-model="pembelian.supplier"
                placeholder="Pilih Supplier"
                class="form-group"
                label="nama"
                track-by="nama"
                select-label=""
                deselect-label="Terpilih"
                selected-label="Terpilih"
                @search-change="getDataSupplier"
                @close="supplier.options = []"
                @open="
                    pembelian.clearErrors('supplier.id');
                    getDataSupplier('');
                "
            >
                <template #noResult>Data Tidak Ditemukan.</template>
                <template #noOptions>Data Tidak Ada.</template>
            </v-select>
            <transition name="fade">
                <div
                    v-if="pembelian.errors['supplier.id']"
                    class="invalid-feedback"
                >
                    {{ pembelian.errors["supplier.id"] }}
                </div>
            </transition>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">NAMA BARANG</th>
                        <th scope="col">HARGA BARANG</th>
                        <th scope="col">JUMLAH BARANG</th>
                        <th scope="col">DIKEMBALIKAN</th>
                        <th scope="col">SATUAN</th>
                        <th scope="col">TOTAL</th>
                        <th scope="col">AKSI</th>
                    </tr>
                </thead>
                <transition name="fade" mode="out-in">
                    <transition-group
                        name="fade"
                        mode="out-in"
                        tag="tbody"
                        v-if="pembelian.barang.length > 0"
                    >
                        <tr
                            v-for="(dataBarang, key) in pembelian.barang"
                            :key="dataBarang.id"
                        >
                            <td>{{ key + 1 }}</td>
                            <td>{{ dataBarang.nama }}</td>
                            <td>{{ getRupiah(dataBarang.harga) }}</td>
                            <td>{{ dataBarang.jumlah }}</td>
                            <td>{{ dataBarang.kembali }}</td>
                            <td>{{ dataBarang.satuan }}</td>
                            <td>
                                {{
                                    getRupiah(
                                        dataBarang.harga *
                                            (dataBarang.jumlah -
                                                dataBarang.kembali)
                                    )
                                }}
                            </td>
                            <td>
                                <span
                                    @click="pembelian.barang.splice(key, 1)"
                                    class="btn btn-danger btn-md shadow-sm"
                                >
                                    HAPUS
                                </span>
                            </td>
                        </tr>
                    </transition-group>
                    <tbody v-else class="text-center">
                        <tr>
                            <td colspan="8">Belum Ada Data</td>
                        </tr>
                    </tbody>
                </transition>
                <tfoot>
                    <tr>
                        <th colspan="3" class="text-center">TOTAL</th>
                        <th>
                            {{
                                pembelian.barang.reduce(
                                    (total, val) => total + val.jumlah,
                                    0
                                )
                            }}
                        </th>
                        <th>
                            {{
                                pembelian.barang.reduce(
                                    (total, val) => total + val.kembali,
                                    0
                                )
                            }}
                        </th>
                        <th></th>
                        <th>
                            {{
                                getRupiah(
                                    pembelian.barang.reduce(
                                        (total, val) =>
                                            total +
                                            (val.jumlah - val.kembali) *
                                                val.harga,
                                        0
                                    )
                                )
                            }}
                        </th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="mb-3">
            <button
                type="submit"
                :disabled="
                    pembelian.processing ||
                    pembelian.supplier === null ||
                    pembelian.barang.length < 1
                "
                class="btn btn-primary btn-md shadow-sm me-2"
            >
                SIMPAN
            </button>
            <span
                :class="{
                    disabled:
                        pembelian.processing ||
                        pembelian.supplier === null ||
                        pembelian.barang.length < 1,
                }"
                @click="pembelian.reset()"
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
    props: { pembelian: Object },
    remember: "pembelian",
    setup() {
        let defaultValueBarang = {
            options: [],
            selected: null,
            loading: false,
        };

        let supplier = reactive({
            options: [],
            loading: false,
        });

        let getDataSupplier = debounce((value) => {
            supplier.loading = true;
            axios
                .post("/api/supplier", { value })
                .then((response) => {
                    supplier.options = response.data;
                })
                .catch((errors) => {
                    console.log("error", errors);
                })
                .finally(() => {
                    supplier.loading = false;
                });
        }, 500);

        let barang = reactive({ ...defaultValueBarang });

        let getDataBarang = debounce((value) => {
            barang.loading = true;
            axios
                .post("/api/barang", { value })
                .then((response) => {
                    barang.options = response.data;
                })
                .catch((errors) => {
                    console.log("error", errors);
                })
                .finally(() => {
                    barang.loading = false;
                });
        }, 500);

        let detailBarang = reactive({
            ...defaultValueBarang,
            jumlah: 0,
            harga: 0,
            kembali: 0,
        });

        let getDataDetailBarang = debounce((value) => {
            detailBarang.loading = true;
            axios
                .post("/api/barang/detail", {
                    value,
                    restok: true,
                    id_barang: barang.selected.id,
                })
                .then((response) => {
                    detailBarang.options = response.data;
                })
                .catch((errors) => {
                    console.log("error", errors);
                })
                .finally(() => {
                    detailBarang.loading = false;
                });
        }, 500);

        let checkBarangDuplicate = (arr, val) =>
            arr.findIndex((object) => object.id === val.id);

        let pushBarang = (arr, val) => {
            if (checkBarangDuplicate(arr, val) === -1) {
                val.nama = barang.selected.nama + " — " + val.nama;
                arr.push({
                    ...val,
                    jumlah: detailBarang.jumlah,
                    harga: detailBarang.harga,
                    kembali: detailBarang.kembali,
                    satuan: barang.selected.satuan,
                });
                Object.assign(barang, defaultValueBarang);
                Object.assign(detailBarang, {
                    ...defaultValueBarang,
                    jumlah: 0,
                    harga: 0,
                    kembali: 0,
                });
            }
        };

        return {
            supplier,
            getDataSupplier,
            barang,
            getDataBarang,
            detailBarang,
            getDataDetailBarang,
            pushBarang,
        };
    },
};
</script>
