<template>
    <div class="card mb-4 shadow user-select-none">
        <div
            role="button"
            class="card-header d-flex align-items-center justify-content-between"
            :class="{ 'border-bottom-0': hide }"
            @click="
                $emit('hideToggle', 'pengembalian');
                $refs['icon'].style.transform = hide
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)';
            "
        >
            <div></div>
            <h5 class="card-title text-center">
                Cetak Laporan Pengembalian Barang
            </h5>
            <i
                class="flex-end fa-solid fa-angle-down"
                ref="icon"
                style="transition: transform 0.5s ease-out"
            ></i>
        </div>
        <transition name="fade" mode="out-in">
            <div class="card-body" v-if="!hide">
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
            </div>
        </transition>
    </div>
</template>
<script>
import Form from "@Components/Form/Report.vue";
import Datepicker from "vue3-datepicker";

export default {
    components: { FormReport: Form, Datepicker },
    props: { bulanan: Object, hide: Boolean },
    emits: ["hideToggle"],
    data() {
        return {
            filter: true,
        };
    },
};
</script>
