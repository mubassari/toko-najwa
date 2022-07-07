<template>
    <accordion-card :title="title">
        <form-report
            v-bind="$attrs"
            :title="'Laporan Riwayat Pembelian Bulanan'"
            :url="'/laporan/pembelian'"
            :data="{
                filter: {
                    Filter: 'Periode ' + getMonthYear(bulanan.time),
                },
                type: null,
                month: new Date(bulanan.time).toLocaleString('id-ID', {
                    month: '2-digit',
                }),
            }"
        >
            <div class="row mb-3">
                <span class="col-sm-3 col-12 col-form-label">
                    Pilih Periode
                </span>
                <div class="col-sm col-12">
                    <datepicker
                        v-model="bulanan.time"
                        :startingView="'month'"
                        :minimumView="'month'"
                        :upperLimit="new Date()"
                        :inputFormat="'MMMM yyyy'"
                        :locale="bulanan.locale"
                        placeholder="Pilih Tanggal"
                        class="input-date"
                    ></datepicker>
                </div>
            </div>
        </form-report>
        <hr />
        <form-report
            v-bind="$attrs"
            :title="'Laporan Riwayat Pembelian Per Barang'"
            :url="'/laporan/pembelian'"
            :data="{
                filter: {
                    Periode: getMonthYear(bulanan.time),
                    'Kode Barang': detailBarang.selected
                        ? detailBarang.selected.id
                        : null,
                    'Nama Barang': barang.selected
                        ? barang.selected.nama
                        : null,
                    'Kategori Barang': barang.selected
                        ? barang.selected.kategori
                        : null,
                    'Detail Barang': detailBarang.selected
                        ? detailBarang.selected.nama
                        : null,
                },
                type: 'barang',
                barang: detailBarang.selected ? detailBarang.selected.id : null,
                month: new Date(bulanan.time).toLocaleString('id-ID', {
                    month: '2-digit',
                }),
            }"
        >
            <div class="row mb-3">
                <span class="col-sm-3 col-12 col-form-label">
                    Pilih Periode
                </span>
                <div class="col-sm col-12">
                    <datepicker
                        v-model="bulanan.time"
                        :startingView="'month'"
                        :minimumView="'month'"
                        :upperLimit="new Date()"
                        :inputFormat="'MMMM yyyy'"
                        :locale="bulanan.locale"
                        placeholder="Pilih Tanggal"
                        class="input-date"
                    ></datepicker>
                </div>
            </div>
            <div class="row mb-3">
                <span class="col-sm-3 col-12 col-form-label">
                    Pilih Barang
                </span>
                <div class="col-sm col-12">
                    <v-select
                        :options="barang.options"
                        :searchable="true"
                        :loading="barang.loading"
                        :allow-empty="false"
                        :internal-search="false"
                        :custom-label="({ kode, nama }) => kode + ' — ' + nama"
                        v-model="barang.selected"
                        placeholder="Pilih Barang"
                        class="form-group"
                        label="nama"
                        track-by="nama"
                        select-label=""
                        deselect-label="Terpilih"
                        selected-label="Terpilih"
                        @search-change="(query) => $emit('getBarang', query)"
                        @close="barang.options = []"
                        @open="
                            detailBarang.selected = null;
                            $emit('getBarang', '');
                        "
                    >
                        <template #noResult>Data Tidak Ditemukan.</template>
                        <template #noOptions>Data Tidak Ada.</template>
                    </v-select>
                </div>
            </div>
            <div class="row mb-3">
                <span class="col-sm-3 col-12 col-form-label">
                    Pilih Detail Barang
                </span>
                <div class="col-sm col-12">
                    <v-select
                        :options="detailBarang.options"
                        :searchable="true"
                        :loading="detailBarang.loading"
                        :allow-empty="false"
                        :internal-search="false"
                        :disabled="
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
                        @search-change="
                            (query) => $emit('getDetailBarang', query)
                        "
                        @close="detailBarang.options = []"
                        @open="$emit('getDetailBarang', '')"
                    >
                        <template #noResult>Data Tidak Ditemukan.</template>
                        <template #noOptions>Data Tidak Ada.</template>
                    </v-select>
                </div>
            </div>
        </form-report>
        <hr />
        <form-report
            v-bind="$attrs"
            :title="'Laporan Riwayat Pembelian Per Supplier'"
            :url="'/laporan/pembelian'"
            :data="{
                filter: {
                    Periode: getMonthYear(bulanan.time),
                    'Nama Supplier': supplier.selected
                        ? supplier.selected.nama
                        : null,
                },
                type: 'supplier',
                supplier: supplier.selected ? supplier.selected.id : 0,
            }"
        >
            <div class="row mb-3">
                <span class="col-sm-3 col-12 col-form-label">
                    Pilih Periode
                </span>
                <div class="col-sm col-12">
                    <datepicker
                        v-model="bulanan.time"
                        :startingView="'month'"
                        :minimumView="'month'"
                        :upperLimit="new Date()"
                        :inputFormat="'MMMM yyyy'"
                        :locale="bulanan.locale"
                        placeholder="Pilih Tanggal"
                        class="input-date"
                    ></datepicker>
                </div>
            </div>
            <div class="row mb-3">
                <span class="col-sm-3 col-12 col-form-label">
                    Pilih Supplier
                </span>
                <div class="col-sm col-12">
                    <v-select
                        :options="supplier.options"
                        :searchable="true"
                        :loading="supplier.loading"
                        :allow-empty="false"
                        :internal-search="false"
                        v-model="supplier.selected"
                        placeholder="Pilih Supplier"
                        class="form-group"
                        label="nama"
                        track-by="nama"
                        select-label=""
                        deselect-label="Terpilih"
                        selected-label="Terpilih"
                        @search-change="(query) => $emit('getSupplier', query)"
                        @close="supplier.options = []"
                        @open="$emit('getSupplier', '')"
                    >
                        <template #noResult>Data Tidak Ditemukan.</template>
                        <template #noOptions>Data Tidak Ada.</template>
                    </v-select>
                </div>
            </div>
        </form-report>
    </accordion-card>
</template>
<script>
import VueMultiselect from "vue-multiselect";
import FormReport from "@Components/Form/Report.vue";
import Datepicker from "vue3-datepicker";
import AccordionCard from "@Components/AccordionCard.vue";

export default {
    components: {
        FormReport,
        VSelect: VueMultiselect,
        Datepicker,
        AccordionCard,
    },
    props: {
        supplier: Object,
        bulanan: Object,
        barang: Object,
        detailBarang: Object,
        hide: Boolean,
    },
    emits: ["getSupplier", "getBarang", "getDetailBarang", "hideToggle"],
    data() {
        return {
            title: "Cetak Laporan Pembelian Barang",
        };
    },
};
</script>
