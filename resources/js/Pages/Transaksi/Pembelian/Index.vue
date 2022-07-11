<template>
    <inertia-head title="Data Pembelian"></inertia-head>
    <div class="mb-3 gap-3 d-flex row text-uppercase">
        <div class="col-sm col-12 me-auto">
            <h4>DATA PEMBELIAN</h4>
        </div>
    </div>
    <div class="mb-3 gap-3 d-flex justify-content-between row">
        <div class="col-12 col-sm-4">
            <inertia-link
                :href="'/transaksi/pembelian/create'"
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
                            <th scope="col">NO NOTA</th>
                            <th scope="col">TANGGAL PEMBELIAN</th>
                            <th scope="col">NAMA SUPPLIER</th>
                            <th scope="col">JUMLAH BARANG</th>
                            <th scope="col">DIKEMBALIKAN</th>
                            <th scope="col">TOTAL PEMBELIAN</th>
                            <th scope="col">AKSI</th>
                        </tr>
                    </thead>
                    <tbody v-if="pembelians.data.length > 0">
                        <tr
                            v-for="(pembelian, key) in pembelians.data"
                            :key="pembelian.id"
                        >
                            <td>{{ pembelians.from + key }}</td>
                            <td>{{ pembelian.no_nota }}</td>
                            <td>{{ getDateFull(pembelian.tanggal) }}</td>
                            <td>{{ pembelian.supplier }}</td>
                            <td>{{ pembelian.jumlah }}</td>
                            <td>{{ pembelian.kembali }}</td>
                            <td>{{ getRupiah(pembelian.total) }}</td>
                            <td>
                                <inertia-link
                                    :href="
                                        '/transaksi/pembelian/' + pembelian.id
                                    "
                                    class="btn btn-sm btn-primary me-2"
                                    >TAMPIL DETAIL</inertia-link
                                >
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else class="text-center">
                        <tr>
                            <td colspan="7">Data Tidak Ditemukan</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <pagination :links="pembelians.links" />
        </div>
    </div>
</template>

<script>
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "@Components/Pagination";
import Datepicker from "vue3-datepicker";
import id from "date-fns/locale/id";

export default {
    components: { Pagination, Datepicker },
    props: { pembelians: Object, filters: Object },
    setup(props) {
        let date = ref(
            props.filters.date == null ? null : new Date(props.filters.date)
        );
        let locale = ref(id);
        watch(
            date,
            _.debounce((value) => {
                Inertia.get(
                    "/transaksi/pembelian",
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
