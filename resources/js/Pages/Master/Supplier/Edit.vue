<template>
    <inertia-head
        :title="`Ubah Supplier | ${supplier.nama}`"
    ></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>UBAH DATA SUPPLIER</h4>
                <hr />
                <form-supplier
                    :supplier="supplier"
                    @submit="supplier.put('/master/supplier/' + id)"
                ></form-supplier>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Form from "@Components/Form/Supplier.vue";

export default {
    components: { FormSupplier: Form },
    props: { supplier: Object },
    setup(props) {
        const id = props.supplier.id;
        const supplier = useForm({
            nama: props.supplier.nama,
            alamat: props.supplier.alamat,
            no_telp: props.supplier.no_telp,
        });
        return { supplier, id };
    },
};
</script>
