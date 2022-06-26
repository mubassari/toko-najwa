<template>
    <inertia-head :title="`Ubah Kategori | ${kategori.nama}`"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>UBAH DATA KATEGORI</h4>
                <hr />
                <form-kategori
                    :kategori="kategori"
                    @submit="kategori.put('/master/kategori/' + id)"
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
    props: { kategori: Object },
    setup(props) {
        const id = props.kategori.id;
        const kategori = useForm({
            kode: props.kategori.kode,
            nama: props.kategori.nama,
        });
        return { kategori, id };
    },
};
</script>
