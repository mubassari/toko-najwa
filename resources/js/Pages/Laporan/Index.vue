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
        let fetchData = _.debounce((data, url, content) => {
            data.loading = true;
            axios
                .post(url, content)
                .then((response) => (data.options = response.data))
                .catch((errors) => console.error("error: ", errors))
                .finally(() => (data.loading = false));
        }, 500);

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

        let getDataKategori = (value) =>
            fetchData(kategori, "/api/kategori", { value });

        let supplier = reactive({ ...defaultValue });

        let getDataSupplier = (value) =>
            fetchData(supplier, "/api/supplier", { value });

        let barang = reactive({ ...defaultValue });

        let getDataBarang = (value) =>
            fetchData(barang, "/api/barang", { value });

        let detailBarang = reactive({ ...defaultValue });

        let getDataDetailBarang = (value) =>
            fetchData(detailBarang, "/api/barang/detail", {
                value,
                id_barang: barang.selected.id,
            });

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
