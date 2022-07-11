<template>
    <inertia-head
        :title="`Tambah Detail Barang | ${barang.nama}`"
    ></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4 class="text-uppercase">
                    TAMBAH DATA DETAIL {{ barang.nama }}
                </h4>
                <hr />
                <form-detail
                    :detail="detail"
                    :barang="barang"
                    @submit="
                        detail.post('/master/barang/' + barang.id + '/detail')
                    "
                ></form-detail>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import FormDetail from "@Components/Form/DetailBarang.vue";

export default {
    components: { FormDetail },
    props: { barang: Object },
    setup(props) {
        const detail = useForm({
            nama: "",
            stok: 0,
            stok_min: 1,
            harga: 0,
            restok: true,
            supplier: [],
            id_barang: props.barang.id,
        });
        return { detail };
    },
};
</script>
