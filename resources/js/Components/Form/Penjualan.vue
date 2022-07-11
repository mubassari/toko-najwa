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
                        :disabled="penjualan.processing"
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
                            penjualan.processing ||
                            barang.selected === null ||
                            barang.selected.jumlah_jenis < 1
                        "
                        :custom-label="
                            ({ nama, harga }) => nama + ' — ' + getRupiah(harga)
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
            <label class="form-label">Jumlah Barang</label>
            <div class="input-group">
                <input
                    type="number"
                    class="form-control"
                    min="1"
                    :max="
                        detailBarang.selected ? detailBarang.selected.stok : 0
                    "
                    :disabled="
                        penjualan.processing || detailBarang.selected === null
                    "
                    v-model="detailBarang.jumlah"
                    placeholder="Masukkan Jumlah Barang"
                />
                <span class="input-group-text" v-if="barang.selected !== null">
                    {{ barang.selected.satuan }}
                </span>
            </div>
        </div>
        <div class="mb-3">
            <span
                :class="{
                    disabled:
                        penjualan.processing ||
                        barang.selected === null ||
                        detailBarang.selected === null ||
                        detailBarang.jumlah < 1,
                }"
                @click="pushBarang(penjualan.barang, detailBarang.selected)"
                class="btn btn-primary btn-md shadow-sm"
            >
                TAMBAH BARANG </span
            ><span
                class="ms-3 text-muted fst-italic"
                v-if="detailBarang.selected !== null"
            >
                Total Harga:
                {{
                    getRupiah(detailBarang.jumlah * detailBarang.selected.harga)
                }}
            </span>
        </div>
        <hr />
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">NAMA BARANG</th>
                        <th scope="col">HARGA</th>
                        <th scope="col">JUMLAH BARANG</th>
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
                        v-if="penjualan.barang.length > 0"
                    >
                        <tr
                            v-for="(dataBarang, key) in penjualan.barang"
                            :key="dataBarang.id"
                        >
                            <td>{{ key + 1 }}</td>
                            <td>{{ dataBarang.nama }}</td>
                            <td>{{ getRupiah(dataBarang.harga) }}</td>
                            <td>{{ dataBarang.jumlah }}</td>
                            <td>{{ dataBarang.satuan }}</td>
                            <td>
                                {{
                                    getRupiah(
                                        dataBarang.harga * dataBarang.jumlah
                                    )
                                }}
                            </td>
                            <td>
                                <span
                                    @click="penjualan.barang.splice(key, 1)"
                                    class="btn btn-danger btn-md shadow-sm"
                                >
                                    HAPUS
                                </span>
                            </td>
                        </tr>
                    </transition-group>
                    <tbody v-else class="text-center">
                        <tr>
                            <td colspan="7">Belum Ada Data</td>
                        </tr>
                    </tbody>
                </transition>
                <tfoot>
                    <tr>
                        <th colspan="3" class="text-center">TOTAL</th>
                        <th>
                            {{
                                penjualan.barang.reduce(
                                    (total, val) => total + val.jumlah,
                                    0
                                )
                            }}
                        </th>
                        <th></th>
                        <th>
                            {{
                                getRupiah(
                                    penjualan.barang.reduce(
                                        (total, val) =>
                                            total + val.jumlah * val.harga,
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
                :disabled="penjualan.processing || penjualan.barang.length < 1"
                class="btn btn-primary btn-md shadow-sm me-2"
            >
                SIMPAN
            </button>
            <span
                :class="{
                    disabled:
                        penjualan.processing || penjualan.barang.length < 1,
                }"
                @click="penjualan.reset()"
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
    props: { penjualan: Object },
    remember: "penjualan",
    setup() {
        let fetchData = _.debounce((data, url, content) => {
            data.loading = true;
            axios
                .post(url, content)
                .then((response) => (data.options = response.data))
                .catch((errors) => console.error("error: ", errors))
                .finally(() => (data.loading = false));
        }, 500);

        let defaultValueBarang = {
            options: [],
            selected: null,
            loading: false,
        };

        let barang = reactive({ ...defaultValueBarang });

        let getDataBarang = (value) =>
            fetchData(barang, "/api/barang", { value });

        let detailBarang = reactive({ ...defaultValueBarang, jumlah: 0 });

        let getDataDetailBarang = (value) =>
            fetchData(detailBarang, "/api/barang/detail", {
                value,
                restok: true,
                id_barang: barang.selected.id,
            });

        let pushBarang = (arr, val) => {
            let index = arr.findIndex((object) => object.id === val.id);
            if (index === -1) {
                if (detailBarang.jumlah > 0) {
                    val.nama = barang.selected.nama + " — " + val.nama;
                    arr.push({
                        ...val,
                        jumlah: detailBarang.jumlah,
                        satuan: barang.selected.satuan,
                    });
                }
                Object.assign(barang, defaultValueBarang);
                Object.assign(detailBarang, {
                    ...defaultValueBarang,
                    jumlah: 0,
                });
            }
        };

        return {
            barang,
            getDataBarang,
            detailBarang,
            getDataDetailBarang,
            pushBarang,
        };
    },
};
</script>
