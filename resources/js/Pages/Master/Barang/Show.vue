<template>
    <inertia-head :title="`Detail Barang | ${barang.nama}`"></inertia-head>
    <div class="mb-3 gap-3 row">
        <div class="col me-auto">
            <div class="mb-2">
                <h4 class="text-uppercase">Kode</h4>
                <span class="fst-italic">{{ barang.kode }}</span>
            </div>
            <div class="mb-2">
                <h4 class="text-uppercase">Nama</h4>
                <span class="fst-italic">{{ barang.nama }}</span>
            </div>
        </div>
        <div class="col me-auto">
            <div class="mb-2">
                <h4 class="text-uppercase">Kategori</h4>
                <span class="fst-italic">{{ barang.kategori }}</span>
            </div>
            <div class="mb-2">
                <h4 class="text-uppercase">Satuan</h4>
                <span class="fst-italic">{{ barang.satuan }}</span>
            </div>
        </div>
        <div class="col-12 col-sm-4 d-sm-block gap-2 row mx-0">
            <inertia-link
                :href="'/master/barang/' + barang.id + '/edit'"
                class="btn btn-primary text-wrap col mb-2"
                >UBAH DATA</inertia-link
            >
            <inertia-link
                @click.prevent="deleteData('/master/barang/' + barang.id)"
                class="btn btn-danger text-wrap col mb-2"
                >HAPUS</inertia-link
            >
        </div>
    </div>
    <div class="card border-0 rounded shadow mb-3">
        <div class="card-body">
            <div class="gap-3 d-flex row mb-3">
                <div class="col me-auto">
                    <h4>Detail Barang</h4>
                </div>
                <div
                    class="col-12 col-sm-4 d-sm-flex justify-content-sm-end gap-2 row mx-0"
                >
                    <inertia-link
                        :href="'/master/barang/' + barang.id + '/detail/create'"
                        class="btn btn-primary text-wrap col"
                        >TAMBAH DETAIL</inertia-link
                    >
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">KODE</th>
                            <th scope="col">NAMA</th>
                            <th scope="col">JUMLAH STOK</th>
                            <th scope="col">MINIMAL STOK</th>
                            <th scope="col">HARGA</th>
                            <th scope="col">NAMA SUPPLIER</th>
                            <th scope="col">AKSI</th>
                        </tr>
                    </thead>
                    <tbody v-if="barang.detail_barang.length > 0">
                        <tr
                            v-for="(detail, key) in barang.detail_barang.filter(
                                (data) => data.restok === 1
                            )"
                            :key="detail.id"
                        >
                            <td>{{ key + 1 }}</td>
                            <td>{{ detail.kode }}</td>
                            <td>{{ detail.nama }}</td>
                            <td>{{ detail.stok }}</td>
                            <td>{{ detail.stok_min }}</td>
                            <td>{{ getRupiah(detail.harga) }}</td>
                            <td>{{ detail.supplier }}</td>
                            <td>
                                <inertia-link
                                    :href="
                                        '/master/barang/' +
                                        barang.id +
                                        '/detail/' +
                                        detail.id +
                                        '/edit'
                                    "
                                    class="btn btn-sm btn-primary me-2"
                                    >UBAH</inertia-link
                                >
                                <inertia-link
                                    @click.prevent="
                                        deleteData(
                                            '/master/barang/' +
                                                barang.id +
                                                '/detail/' +
                                                detail.id
                                        )
                                    "
                                    class="btn btn-sm btn-danger"
                                    >HAPUS</inertia-link
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
        </div>
    </div>
    <div class="card border-0 rounded shadow mb-3">
        <div class="card-body">
            <div class="gap-3 d-flex row mb-3">
                <div class="col me-auto">
                    <h4>Detail Barang Tidak Restok</h4>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">KODE</th>
                            <th scope="col">NAMA</th>
                            <th scope="col">JUMLAH STOK</th>
                            <th scope="col">MINIMAL STOK</th>
                            <th scope="col">HARGA</th>
                            <th scope="col">NAMA SUPPLIER</th>
                            <th scope="col">AKSI</th>
                        </tr>
                    </thead>
                    <tbody v-if="barang.detail_barang.length > 0">
                        <tr
                            v-for="(detail, key) in barang.detail_barang.filter(
                                (data) => data.restok !== 1
                            )"
                            :key="detail.id"
                        >
                            <td>{{ key + 1 }}</td>
                            <td>{{ detail.kode }}</td>
                            <td>{{ detail.nama }}</td>
                            <td>{{ detail.stok }}</td>
                            <td>{{ detail.stok_min }}</td>
                            <td>{{ getRupiah(detail.harga) }}</td>
                            <td>{{ detail.supplier }}</td>
                            <td>
                                <inertia-link
                                    :href="
                                        '/master/barang/' +
                                        barang.id +
                                        '/detail/' +
                                        detail.id +
                                        '/edit'
                                    "
                                    class="btn btn-sm btn-primary me-2"
                                    >UBAH</inertia-link
                                >
                                <inertia-link
                                    @click.prevent="
                                        deleteData(
                                            '/master/barang/' +
                                                barang.id +
                                                '/detail/' +
                                                detail.id
                                        )
                                    "
                                    class="btn btn-sm btn-danger"
                                    >HAPUS</inertia-link
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
        </div>
    </div>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";

export default {
    props: { barang: Object },
    setup() {
        function deleteData(route) {
            Inertia.delete(route, {
                onBefore: () =>
                    confirm(
                        "Apakah Anda yakin ingin menghapus data detail ini?"
                    ),
            });
        }
        return { deleteData };
    },
};
</script>
