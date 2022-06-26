<template>
    <inertia-head title="Menu Master"></inertia-head>
    <div class="row">
        <div
            class="col-12 d-grid mb-3"
            v-for="(link, key) in masterLink"
            :class="
                masterLink.length - 1 == key && key % 2 == 0 ? '' : 'col-sm-6'
            "
            :key="key"
        >
            <inertia-link
                :href="'/master/' + link.url"
                class="btn btn-primary fs-3 p-4 fw-bolder"
                >{{ link.name }}</inertia-link
            >
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            masterLink: [
                {
                    name: "BARANG",
                    url: "barang",
                },
                {
                    name: "SUPPLIER",
                    url: "supplier",
                },
                {
                    name: "SATUAN",
                    url: "satuan",
                },
                {
                    name: "KATEGORI",
                    url: "kategori",
                },
            ],
        };
    },
};
</script>
