<template>
    <inertia-head title="Laporan"></inertia-head>
    <laporan-barang
        :kategori="kategori"
        @get-kategori="getDataKategori"
        v-bind="$attrs"
    ></laporan-barang>
    <laporan-supplier v-bind="$attrs"></laporan-supplier>
    <laporan-pembelian
        :bulanan="bulanan"
        :supplier="supplier"
        @get-supplier="getDataSupplier"
        :barang="barang"
        @get-barang="getDataBarang"
        :detail-barang="detailBarang"
        @get-detail-barang="getDataDetailBarang"
        v-bind="$attrs"
    ></laporan-pembelian>
    <laporan-pengembalian
        :bulanan="bulanan"
        v-bind="$attrs"
    ></laporan-pengembalian>
    <laporan-penjualan
        :harian="harian"
        :bulanan="bulanan"
        :barang="barang"
        @get-barang="getDataBarang"
        :detail-barang="detailBarang"
        @get-detail-barang="getDataDetailBarang"
        v-bind="$attrs"
    ></laporan-penjualan>
</template>
<script>
import { reactive } from "vue";
import { debounce } from "lodash";
import id from "date-fns/locale/id";

import LaporanBarang from "./Form/Barang.vue";
import LaporanPembelian from "./Form/Pembelian.vue";
import LaporanPengembalian from "./Form/Pengembalian.vue";
import LaporanPenjualan from "./Form/Penjualan.vue";
import LaporanSupplier from "./Form/Supplier.vue";

export default {
    components: {
        LaporanBarang,
        LaporanPembelian,
        LaporanPengembalian,
        LaporanPenjualan,
        LaporanSupplier,
    },
    setup() {
        let defaultValue = {
            options: [],
            selected: [],
            loading: false,
        };

        let defaultValuePeriode = {
            time: new Date(),
            locale: id,
        };

        let harian = reactive({ ...defaultValuePeriode });

        let bulanan = reactive({ ...defaultValuePeriode });

        let kategori = reactive({ ...defaultValue });

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

        let supplier = reactive({ ...defaultValue });

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

        let barang = reactive({ ...defaultValue });

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

        let detailBarang = reactive({ ...defaultValue });

        let getDataDetailBarang = debounce((value) => {
            detailBarang.loading = true;
            axios
                .post("/api/barang/detail", {
                    value,
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

        return {
            harian,
            barang,
            bulanan,
            kategori,
            supplier,
            detailBarang,
            getDataBarang,
            getDataKategori,
            getDataSupplier,
            getDataDetailBarang,
        };
    },
};
</script>
