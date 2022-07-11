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
                <transition name="fade" mode="out-in" appear>
                    <div v-if="$slots.default">
                        <slot></slot>
                    </div>
                </transition>
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
import { ref } from "@vue/reactivity";

export default {
    components: { Sidebar, Navbar, Toast, ScrollTop },
    inheritAttrs: true,
    setup() {
        let sidebarToggled = ref(false);
        let toggleSidebar = () =>
            (sidebarToggled.value = !sidebarToggled.value);
        return { sidebarToggled, toggleSidebar };
    },
};
</script>
