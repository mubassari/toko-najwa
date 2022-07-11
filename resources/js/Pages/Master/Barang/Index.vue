<template>
    <inertia-head title="Data Barang"></inertia-head>
    <div class="mb-3 gap-3 d-flex row text-uppercase">
        <div class="col-sm col-12 me-auto">
            <h4>DATA BARANG</h4>
        </div>
    </div>
    <div class="mb-3 gap-3 d-flex justify-content-between row">
        <div class="col-12 col-sm-4">
            <inertia-link
                :href="'/master/barang/create'"
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
            <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">KODE</th>
                            <th scope="col">NAMA</th>
                            <th scope="col">KATEGORI</th>
                            <th scope="col">JUMLAH JENIS</th>
                            <th scope="col">TOTAL STOK</th>
                            <th scope="col">SATUAN</th>
                            <th scope="col">AKSI</th>
                        </tr>
                    </thead>
                    <tbody v-if="barangs.data.length > 0">
                        <tr
                            v-for="(barang, key) in barangs.data"
                            :key="barang.id"
                        >
                            <td>{{ barangs.from + key }}</td>
                            <td>{{ barang.kode }}</td>
                            <td>{{ barang.nama }}</td>
                            <td>{{ barang.kategori }}</td>
                            <td>{{ barang.jumlah_jenis }}</td>
                            <td>{{ barang.total_stok || 0 }}</td>
                            <td>{{ barang.satuan }}</td>
                            <td>
                                <inertia-link
                                    :href="'/master/barang/' + barang.id"
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
            <pagination :links="barangs.links" />
        </div>
    </div>
</template>

<script>
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "@Components/Pagination";

export default {
    components: { Pagination },
    props: { barangs: Object, filters: Object },
    setup(props) {
        let search = ref(props.filters.search);
        watch(
            search,
            _.debounce((value) => {
                Inertia.get(
                    "/master/barang",
                    { search: value },
                    { preserveState: true, replace: true }
                );
            }, 100)
        );
        return { search };
    },
};
</script>
