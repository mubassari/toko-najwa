<template>
    <inertia-head title="Tambah Supplier"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>TAMBAH DATA SUPPLIER</h4>
                <hr />
                <form-supplier
                    :supplier="supplier"
                    @submit="supplier.post('/master/supplier')"
                ></form-supplier>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import FormSupplier from "@Components/Form/Supplier.vue";

export default {
    components: { FormSupplier },
    setup() {
        const supplier = useForm({ nama: "", alamat: "", no_telp: "" });
        return { supplier };
    },
};
</script>
