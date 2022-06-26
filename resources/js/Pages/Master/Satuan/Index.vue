<template>
    <inertia-head title="Data Satuan"></inertia-head>
    <div class="mb-3 gap-3 d-flex row text-uppercase">
        <div class="col-sm col-12 me-auto">
            <h4>DATA SATUAN</h4>
        </div>
    </div>
    <div class="mb-3 gap-3 d-flex justify-content-between row">
        <div class="col-12 col-sm-4">
            <inertia-link
                :href="'/master/satuan/create'"
                class="btn btn-primary"
                >TAMBAH DATA</inertia-link
            >
        </div>
        <div class="col-12 col-sm-4">
            <input
                type="text"
                class="form-control"
                placeholder="Cari data"
                v-model="search"
            />
        </div>
    </div>
    <div class="card border-0 rounded shadow">
        <div class="card-body">
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">NAMA</th>
                        <th scope="col">AKSI</th>
                    </tr>
                </thead>
                <tbody v-if="satuans.data.length > 0">
                    <tr v-for="(satuan, key) in satuans.data" :key="satuan.id">
                        <td>{{ satuans.from + key }}</td>
                        <td>{{ satuan.nama }}</td>
                        <td>
                            <inertia-link
                                :href="'/master/satuan/' + satuan.id + '/edit'"
                                class="btn btn-sm btn-primary me-2"
                                >UBAH</inertia-link
                            >
                            <inertia-link
                                @click.prevent="
                                    deleteData('/master/satuan/' + satuan.id)
                                "
                                class="btn btn-sm btn-danger"
                                >HAPUS</inertia-link
                            >
                        </td>
                    </tr>
                </tbody>
                <tbody v-else class="text-center">
                    <tr>
                        <td colspan="3">Data Tidak Ditemukan</td>
                    </tr>
                </tbody>
            </table>
            <pagination :links="satuans.links" />
        </div>
    </div>
</template>

<script>
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "@Components/Pagination";
import { debounce } from "lodash";

export default {
    components: { Pagination },
    props: { satuans: Object, filters: Object },
    setup(props) {
        let search = ref(props.filters.search);
        watch(
            search,
            debounce((value) => {
                Inertia.get(
                    "/master/satuan",
                    { search: value },
                    { preserveState: true, replace: true }
                );
            }, 100)
        );
        function deleteData(route) {
            Inertia.delete(route, {
                onBefore: () =>
                    confirm("Apakah Anda yakin ingin menghapus data ini?"),
            });
        }
        return { search, deleteData };
    },
};
</script>
