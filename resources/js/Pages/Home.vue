<template>
    <inertia-head title="Beranda"></inertia-head>
    <div class="row">
        <template v-for="(link, key) in homeLink" :key="key">
            <div
                class="col-12 d-grid mb-3 col-sm-6"
                v-if="!link.admin_only || $attrs.auth.user.can.manage_user"
            >
                <inertia-link
                    :href="link.url"
                    class="btn btn-primary fs-3 p-4 fw-bolder"
                    >{{ link.name }}</inertia-link
                >
            </div>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            homeLink: [
                {
                    name: "MENU TRANSAKSI",
                    url: "/transaksi",
                    admin_only: false,
                },
                {
                    name: "MENU MASTER",
                    url: "/master",
                    admin_only: false,
                },
                {
                    name: "MENU PENGGUNA",
                    url: "/user",
                    admin_only: true,
                },
                {
                    name: "MENU LAPORAN",
                    url: "/laporan",
                    admin_only: false,
                },
            ],
        };
    },
};
</script>
