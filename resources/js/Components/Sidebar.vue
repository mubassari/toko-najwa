<template>
    <nav
        class="bd-flex flex-column flex-shrink-0 p-3 bg-white border-end user-select-none"
    >
        <div
            class="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
            <span class="fs-4 text-uppercase">Toko Najwa</span>
        </div>
        <hr />
        <div class="d-flex align-items-center justify-content-between">
            <span>{{ $attrs.auth.user.nama }}</span>
            <span class="ms-3 badge bg-primary">
                {{ $attrs.auth.user.role }}
            </span>
        </div>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
            <template v-for="(link, key) in sidebar" :key="key">
                <li v-if="!link.admin_only || $attrs.auth.user.can.manage_user">
                    <inertia-link
                        class="nav-link"
                        :class="[
                            link.url == '/' + $page.url.split(/(\/|\?)+/)[2]
                                ? 'active'
                                : 'text-dark',
                        ]"
                        :href="link.url"
                    >
                        <i class="me-2" :class="link.icon"></i>
                        {{ link.name }}
                    </inertia-link>
                </li>
            </template>
        </ul>
    </nav>
    <div
        id="sidenav-toggle"
        class="sidenav-close"
        @click="$emit('toggleSidebar')"
    >
        <button class="btn btn-light m-3">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sidebar: [
                {
                    name: "Beranda",
                    url: "/home",
                    icon: "fa-solid fa-house",
                    admin_only: false,
                },
                {
                    name: "Data Transaksi",
                    url: "/transaksi",
                    icon: "fa-solid fa-cart-shopping",
                    admin_only: false,
                },
                {
                    name: "Data Master",
                    url: "/master",
                    icon: "fa-solid fa-database",
                    admin_only: false,
                },
                {
                    name: "Laporan",
                    url: "/laporan",
                    icon: "fa-solid fa-file",
                    admin_only: false,
                },
                {
                    name: "Pengguna",
                    url: "/user",
                    icon: "fa-solid fa-users",
                    admin_only: true,
                },
            ],
        };
    },
    emits: ["toggleSidebar"],
};
</script>
