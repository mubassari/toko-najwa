<template>
    <inertia-head title="Tambah Satuan"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>TAMBAH DATA SATUAN</h4>
                <hr />
                <form-satuan
                    :satuan="satuan"
                    @submit="satuan.post('/master/satuan')"
                ></form-satuan>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import FormSatuan from "@Components/Form/Satuan.vue";

export default {
    components: { FormSatuan },
    setup() {
        const satuan = useForm({ nama: "" });
        return { satuan };
    },
};
</script>
