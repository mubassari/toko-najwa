<template>
    <div id="sidenav-bg" :class="{ 'sidenav-toggled': sidebarToggled }"></div>
    <div id="sidenav-container">
        <aside id="sidenav-open" :class="{ 'sidenav-toggled': sidebarToggled }">
            <sidebar @toggle-sidebar="toggleSidebar" v-bind="$attrs" />
        </aside>
        <div>
            <navbar @toggle-sidebar="toggleSidebar" v-bind="$attrs" />
            <main class="container-fluid mr-4 mt-4">
                <toast
                    :toast="$page.props.toast"
                    :popstate="$page.props.popstate"
                />
                <slot />
            </main>
        </div>
    </div>
    <scroll-top></scroll-top>
</template>

<script>
//import component
import Sidebar from "@Components/Sidebar.vue";
import Navbar from "@Components/Navbar.vue";
import Toast from "@Components/Toast.vue";
import ScrollTop from "@Components/ScrollTop.vue";

export default {
    components: { Sidebar, Navbar, Toast, ScrollTop },
    inheritAttrs: true,
    data() {
        return { sidebarToggled: false };
    },
    methods: {
        toggleSidebar() {
            this.sidebarToggled = !this.sidebarToggled;
        },
    },
};
</script>
