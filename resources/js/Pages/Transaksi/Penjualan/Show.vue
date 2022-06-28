<template>
    <inertia-head
        :title="`Detail Penjualan | ${getDateFull(penjualan.tanggal)}`"
    ></inertia-head>
    <div class="mb-3 gap-3 d-flex row text-uppercase">
        <div class="col-sm col-12 me-auto">
            <h4>TANGGAL PENJUALAN</h4>
            <span class="fst-italic">{{ getDateFull(penjualan.tanggal) }}</span>
        </div>
        <div class="col-sm col-12 me-auto">
            <h4>KODE PENJUALAN</h4>
            <span class="fst-italic">{{ penjualan.kode }}</span>
        </div>
    </div>
    <div class="card border-0 rounded shadow">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">NAMA BARANG</th>
                            <th scope="col">HARGA</th>
                            <th scope="col">JUMLAH BARANG</th>
                            <th scope="col">SATUAN</th>
                            <th scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    <transition name="fade" mode="out-in">
                        <tbody v-if="penjualan.detail_penjualan.length > 0">
                            <tr
                                v-for="(
                                    dataBarang, key
                                ) in penjualan.detail_penjualan"
                                :key="dataBarang.id"
                            >
                                <td>{{ key + 1 }}</td>
                                <td>{{ dataBarang.nama }}</td>
                                <td>{{ getRupiah(dataBarang.harga) }}</td>
                                <td>{{ dataBarang.jumlah }}</td>
                                <td>{{ dataBarang.satuan }}</td>
                                <td>
                                    {{
                                        getRupiah(
                                            dataBarang.harga * dataBarang.jumlah
                                        )
                                    }}
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else class="text-center">
                            <tr>
                                <td colspan="6">Belum Ada Data</td>
                            </tr>
                        </tbody>
                    </transition>
                    <tfoot>
                        <tr>
                            <th colspan="3" class="text-center">TOTAL</th>
                            <th>
                                {{
                                    penjualan.detail_penjualan.reduce(
                                        (total, val) => total + val.jumlah,
                                        0
                                    )
                                }}
                            </th>
                            <th></th>
                            <th>
                                {{
                                    getRupiah(
                                        penjualan.detail_penjualan.reduce(
                                            (total, val) =>
                                                total + val.jumlah * val.harga,
                                            0
                                        )
                                    )
                                }}
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default { props: { penjualan: Object } };
</script>
