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
    <!-- Scroll to top -->
    <transition name="fade" mode="out-in">
        <a
            class="scroll-to-top text-white rounded"
            @click="scrollToTop"
            v-show="scrolled"
        >
            <i class="fa-solid fa-angle-up"></i>
        </a>
    </transition>
</template>

<script>
//import component
import Sidebar from "@Components/Sidebar.vue";
import Navbar from "@Components/Navbar.vue";
import Toast from "@Components/Toast.vue";

export default {
    components: { Sidebar, Navbar, Toast },
    inheritAttrs: true,
    data() {
        return { scrolled: false, sidebarToggled: false };
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            this.scrolled = window.scrollY > 100;
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        toggleSidebar() {
            this.sidebarToggled = !this.sidebarToggled;
        },
    },
};
</script>
