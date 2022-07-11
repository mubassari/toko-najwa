<template>
    <inertia-head title="Tambah Penjualan"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>TAMBAH DATA PENJUALAN</h4>
                <hr />
                <form-penjualan
                    :penjualan="penjualan"
                    @submit="penjualan.post('/transaksi/penjualan')"
                ></form-penjualan>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import FormPenjualan from "@Components/Form/Penjualan.vue";

export default {
    components: { FormPenjualan },
    setup() {
        const penjualan = useForm({ barang: [] });
        return { penjualan };
    },
};
</script>
