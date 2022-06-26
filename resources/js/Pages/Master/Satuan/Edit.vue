<template>
    <inertia-head :title="`Ubah Satuan | ${satuan.nama}`"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>UBAH DATA SATUAN</h4>
                <hr />
                <form-satuan
                    :satuan="satuan"
                    @submit="satuan.put('/master/satuan/' + id)"
                ></form-satuan>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Form from "@Components/Form/Satuan.vue";

export default {
    components: { FormSatuan: Form },
    props: { satuan: Object },
    setup(props) {
        const id = props.satuan.id;
        const satuan = useForm({
            nama: props.satuan.nama,
        });
        return { satuan, id };
    },
};
</script>
