<template>
    <inertia-head title="Tambah Pembelian"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>TAMBAH DATA PEMBELIAN</h4>
                <hr />
                <form-pembelian
                    :pembelian="pembelian"
                    @submit="pembelian.post('/transaksi/pembelian')"
                ></form-pembelian>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import FormPembelian from "@Components/Form/Pembelian.vue";

export default {
    components: { FormPembelian },
    setup() {
        const pembelian = useForm({ supplier: null, barang: [], no_nota: "" });
        return { pembelian };
    },
};
</script>
