<template>
    <inertia-head title="Tambah Kategori"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>TAMBAH DATA KATEGORI</h4>
                <hr />
                <form-kategori
                    :kategori="kategori"
                    @submit="kategori.post('/master/kategori')"
                ></form-kategori>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Form from "@Components/Form/Kategori.vue";

export default {
    components: { FormKategori: Form },
    setup() {
        const kategori = useForm({ kode: "", nama: "" });
        return { kategori };
    },
};
</script>
