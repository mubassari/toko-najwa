<template>
    <inertia-head title="Data Penjualan"></inertia-head>
    <div class="mb-3 gap-3 d-flex row text-uppercase">
        <div class="col-sm col-12 me-auto">
            <h4>DATA PENJUALAN</h4>
        </div>
    </div>
    <div class="mb-3 gap-3 d-flex justify-content-between row">
        <div class="col-12 col-sm-4">
            <inertia-link
                :href="'/transaksi/penjualan/create'"
                class="btn btn-primary"
                >TAMBAH DATA</inertia-link
            >
        </div>
        <div class="col-12 col-sm-4">
            <datepicker
                v-model="date"
                :startingView="'day'"
                :minimumView="'day'"
                :upperLimit="new Date()"
                :inputFormat="'dd MMMM yyyy'"
                :locale="locale"
                :clearable="true"
                placeholder="Pilih Tanggal"
                class="input-date"
            ></datepicker>
        </div>
    </div>
    <div class="card border-0 rounded shadow">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">TANGGAL PENJUALAN</th>
                            <th scope="col">JUMLAH BARANG</th>
                            <th scope="col">TOTAL PENJUALAN</th>
                            <th scope="col">AKSI</th>
                        </tr>
                    </thead>
                    <tbody v-if="penjualans.data.length > 0">
                        <tr
                            v-for="(penjualan, key) in penjualans.data"
                            :key="penjualan.id"
                        >
                            <td>{{ penjualans.from + key }}</td>
                            <td>{{ getDate(penjualan.tanggal) }}</td>
                            <td>{{ penjualan.jumlah_barang || 0 }}</td>
                            <td>
                                {{
                                    getRupiah(
                                        penjualan.detail_penjualan.reduce(
                                            (total, val) =>
                                                total + val.jumlah * val.harga,
                                            0
                                        )
                                    )
                                }}
                            </td>
                            <td>
                                <inertia-link
                                    :href="
                                        '/transaksi/penjualan/' + penjualan.id
                                    "
                                    class="btn btn-sm btn-primary me-2"
                                    >TAMPIL DETAIL</inertia-link
                                >
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else class="text-center">
                        <tr>
                            <td colspan="6">Data Tidak Ditemukan</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <pagination :links="penjualans.links" />
        </div>
    </div>
</template>

<script>
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "@Components/Pagination";
import { debounce } from "lodash";
import Datepicker from "vue3-datepicker";
import id from "date-fns/locale/id";

export default {
    components: { Pagination, Datepicker },
    props: { penjualans: Object, filters: Object },
    setup(props) {
        let date = ref(
            props.filters.date == null ? null : new Date(props.filters.date)
        );
        let locale = ref(id);
        watch(
            date,
            debounce((value) => {
                Inertia.get(
                    "/transaksi/penjualan",
                    {
                        date:
                            value == null
                                ? ""
                                : new Date(value)
                                      .toLocaleString("id-ID", {
                                          day: "2-digit",
                                          month: "2-digit",
                                          year: "numeric",
                                      })
                                      .split("/")
                                      .reverse()
                                      .join("-"),
                    },
                    { preserveState: true, replace: true }
                );
            }, 100)
        );
        return { date, locale };
    },
};
</script>
