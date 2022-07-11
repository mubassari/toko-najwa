<template>
    <inertia-head :title="`Ubah Data Barang | ${barang.nama}`"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>UBAH DATA BARANG</h4>
                <hr />
                <form-barang
                    :barang="barang"
                    @submit="barang.put('/master/barang/' + id)"
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
    props: { barang: Object },
    setup(props) {
        const id = props.barang.id;
        const barang = useForm({
            kode: props.barang.kode,
            nama: props.barang.nama,
            kategori: props.barang.kategori,
            satuan: props.barang.satuan,
        });
        return { barang, id };
    },
};
</script>
