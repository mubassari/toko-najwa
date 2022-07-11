<template>
    <inertia-head title="Tambah Barang"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>TAMBAH DATA BARANG</h4>
                <hr />
                <form-barang
                    :barang="barang"
                    @submit="barang.post('/master/barang')"
                ></form-barang>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import FormBarang from "@Components/Form/Barang.vue";

export default {
    components: { FormBarang },
    setup() {
        const barang = useForm({
            kode: "",
            nama: "",
            kategori: [],
            satuan: [],
        });
        return { barang };
    },
};
</script>
