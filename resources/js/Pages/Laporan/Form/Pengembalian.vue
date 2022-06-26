<template>
    <div class="card mb-4 shadow">
        <div class="card-header">
            <h5 class="card-title text-center">
                Cetak Laporan Pengembalian Barang
            </h5>
        </div>
        <div class="card-body">
            <form-report
                v-bind="$attrs"
                :title="'Laporan Riwayat Pengembalian Barang'"
                :url="'/laporan/pengembalian'"
                :data="{
                    filter: filter
                        ? 'Semua'
                        : 'Per ' + getMonthYear(bulanan.time),
                    type: filter ? null : 'bulanan',
                    month: filter
                        ? '00'
                        : new Date(bulanan.time).toLocaleString('id-ID', {
                              month: '2-digit',
                          }),
                }"
                ><div class="form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="filter_kembali"
                        value="true"
                        v-model="filter"
                    />
                    <label class="form-check-label" @click="filter = true"
                        >Semua</label
                    >
                </div>
                <div class="mb-3 form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="filter_kembali"
                        value="false"
                        v-model="filter"
                    />
                    <label class="form-check-label" @click="filter = false">
                        <span> Pilih Periode</span>
                    </label>
                    <div class="col-sm-3 col-12 mt-2">
                        <datepicker
                            v-model="bulanan.time"
                            :startingView="'month'"
                            :minimumView="'month'"
                            :upperLimit="new Date()"
                            :inputFormat="'MMMM yyyy'"
                            :locale="bulanan.locale"
                            placeholder="Pilih Tanggal"
                            class="input-date"
                            @click="filter = false"
                        ></datepicker>
                    </div>
                </div>
            </form-report>
        </div>
    </div>
</template>
<script>
import Form from "@Components/Form/Report.vue";
import Datepicker from "vue3-datepicker";

export default {
    components: { FormReport: Form, Datepicker },
    props: { bulanan: Object },
    data() {
        return {
            filter: true,
        };
    },
};
</script>
