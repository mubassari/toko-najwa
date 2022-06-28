<template>
    <inertia-head
        :title="`Detail Pembelian | ${getDateFull(pembelian.tanggal)}`"
    ></inertia-head>
    <div class="mb-3 gap-3 d-flex row text-uppercase">
        <div class="col-sm col-12 me-auto">
            <h4>TANGGAL PEMBELIAN</h4>
            <span class="fst-italic">{{ getDateFull(pembelian.tanggal) }}</span>
        </div>
        <div class="col-sm col-12 me-auto">
            <h4>NOMOR NOTA</h4>
            <span class="fst-italic">{{ pembelian.no_nota }}</span>
        </div>
        <div class="col-sm col-12 me-auto">
            <h4>NAMA SUPPLIER</h4>
            <span class="fst-italic">{{ pembelian.supplier }}</span>
        </div>
    </div>
    <div class="card border-0 rounded shadow">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">NAMA</th>
                            <th scope="col">HARGA</th>
                            <th scope="col">JUMLAH</th>
                            <th scope="col">DIKEMBALIKAN</th>
                            <th scope="col">SATUAN</th>
                            <th scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    <transition name="fade" mode="out-in">
                        <tbody v-if="pembelian.detail_pembelian.length > 0">
                            <tr
                                v-for="(
                                    dataBarang, key
                                ) in pembelian.detail_pembelian"
                                :key="dataBarang.id"
                            >
                                <td>{{ key + 1 }}</td>
                                <td>{{ dataBarang.nama }}</td>
                                <td>{{ getRupiah(dataBarang.harga) }}</td>
                                <td>{{ dataBarang.jumlah }}</td>
                                <td>{{ dataBarang.kembali }}</td>
                                <td>{{ dataBarang.satuan }}</td>
                                <td>{{ getRupiah(dataBarang.total) }}</td>
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
                                    pembelian.detail_pembelian.reduce(
                                        (total, val) => total + val.jumlah,
                                        0
                                    )
                                }}
                            </th>
                            <th>
                                {{
                                    pembelian.detail_pembelian.reduce(
                                        (total, val) => total + val.kembali,
                                        0
                                    )
                                }}
                            </th>
                            <th></th>
                            <th>
                                {{
                                    getRupiah(
                                        pembelian.detail_pembelian.reduce(
                                            (total, val) =>
                                                total +
                                                val.harga *
                                                    (val.jumlah - val.kembali),
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
export default { props: { pembelian: Object } };
</script>
