<template>
    <accordion-card :title="title">
        <form-report
            v-bind="$attrs"
            :title="
                'Laporan Riwayat Pengembalian Barang' +
                (filter ? '' : ' Bulanan')
            "
            :url="'/laporan/pengembalian'"
            :data="{
                filter: filter
                    ? 'Semua'
                    : 'Periode ' + getMonthYear(bulanan.time),
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
                <div class="col-sm col-12 mt-2">
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
    </accordion-card>
</template>
<script>
import FormReport from "@Components/Form/Report.vue";
import Datepicker from "vue3-datepicker";
import AccordionCard from "@Components/AccordionCard.vue";

export default {
    components: { FormReport, Datepicker, AccordionCard },
    props: { bulanan: Object, hide: Boolean },
    emits: ["hideToggle"],
    data() {
        return {
            filter: true,
            title: "Cetak Laporan Pengembalian Barang",
        };
    },
};
</script>
