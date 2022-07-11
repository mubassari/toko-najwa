<template>
    <inertia-head
        :title="`Ubah Detail Barang | ${barang.nama} | ${detail.nama}`"
    ></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4 class="text-uppercase">
                    UBAH DATA DETAIL {{ barang.nama }}
                </h4>
                <hr />
                <form-detail
                    :detail="details"
                    :barang="barang"
                    @submit="
                        details.put(
                            '/master/barang/' +
                                barang.id +
                                '/detail/' +
                                detail.id
                        )
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
    props: { barang: Object, detail: Object },
    setup(props) {
        const details = useForm({
            nama: props.detail.nama,
            stok: props.detail.stok,
            stok_min: props.detail.stok_min,
            harga: props.detail.harga,
            restok: props.detail.restok === 1,
            supplier: props.detail.supplier,
            id_barang: props.barang.id,
        });
        return { details };
    },
};
</script>
