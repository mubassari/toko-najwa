<template>
    <inertia-head title="Menu Transaksi"></inertia-head>
    <div class="row">
        <div
            class="col-12 d-grid mb-3"
            v-for="(link, key) in transaksiLink"
            :class="
                transaksiLink.length - 1 == key && key % 2 == 0
                    ? ''
                    : 'col-sm-6'
            "
            :key="key"
        >
            <inertia-link
                :href="'/transaksi/' + link.url"
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
            transaksiLink: [
                {
                    name: "PENJUALAN",
                    url: "penjualan",
                },
                {
                    name: "PEMBELIAN",
                    url: "pembelian",
                },
            ],
        };
    },
};
</script>
