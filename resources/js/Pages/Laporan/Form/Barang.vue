<template>
    <div class="card mb-4 shadow">
        <div class="card-header">
            <h5 class="card-title text-center">Cetak Laporan Barang</h5>
        </div>
        <div class="card-body">
            <form-report
                v-bind="$attrs"
                :title="
                    'Laporan Barang' +
                    (filter ? '' : kategori.selected ? ` (Per Kategori)` : '')
                "
                :url="'/laporan/barang'"
                :data="{
                    filter: filter
                        ? 'Semua'
                        : 'Kategori ' +
                          (kategori.selected ? kategori.selected.nama : null),
                    type: null,
                    kategori: filter ? 0 : kategori.selected.id,
                }"
                ><div class="form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="filter_barang"
                        value="true"
                        v-model="filter"
                    />
                    <label
                        class="form-check-label"
                        @click="
                            filter = true;
                            kategori.selected = [];
                        "
                        >Semua</label
                    >
                </div>
                <div class="mb-3 form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="filter_barang"
                        value="false"
                        v-model="filter"
                    />
                    <label class="form-check-label" @click="filter = false">
                        <span> Per Kategori</span>
                    </label>
                    <div class="col-sm-3 col-12 mt-2">
                        <v-select
                            :options="kategori.options"
                            :searchable="true"
                            :loading="kategori.loading"
                            :allow-empty="false"
                            :internal-search="false"
                            :custom-label="
                                ({ kode, nama }) => kode + ' — ' + nama
                            "
                            v-model="kategori.selected"
                            placeholder="Pilih kategori"
                            class="form-group"
                            label="nama"
                            track-by="nama"
                            select-label=""
                            deselect-label="Terpilih"
                            selected-label="Terpilih"
                            @search-change="
                                (query) => $emit('getKategori', query)
                            "
                            @close="kategori.options = []"
                            @open="
                                $emit('getKategori', '');
                                filter = false;
                            "
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
                :title="'Laporan Barang Perlu Restok'"
                :url="'/laporan/barang'"
                :data="{ filter: 'Semua', type: 'restok' }"
            ></form-report>
            <hr />
            <form-report
                v-bind="$attrs"
                :title="'Laporan Barang Tidak Restok'"
                :url="'/laporan/barang'"
                :data="{ filter: 'Semua', type: 'tidak-restok' }"
            ></form-report>
        </div>
    </div>
</template>
<script>
import VueMultiselect from "vue-multiselect";
import Form from "@Components/Form/Report.vue";

export default {
    components: { FormReport: Form, VSelect: VueMultiselect },
    props: { kategori: Object },
    emits: ["getKategori"],
    data() {
        return {
            filter: true,
        };
    },
};
</script>
