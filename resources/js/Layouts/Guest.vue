<template>
    <toast :toast="$page.props.toast" :popstate="$page.props.popstate" />
    <nav class="p-3 bg-white border-bottom sticky-top shadow">
        <div
            class="d-flex justify-content-center align-items-center user-select-none"
        >
            <div
                class="ms-3 text-uppercase text-decoration-none text-center fs-4"
            >
                SISTEM INVENTORY BARANG
            </div>
        </div>
    </nav>
    <main>
        <transition name="fade" mode="out-in" appear>
            <div v-if="$slots.default">
                <slot></slot>
            </div>
        </transition>
    </main>
    <scroll-top></scroll-top>
</template>
<script>
import Toast from "@Components/Toast.vue";
import ScrollTop from "@Components/ScrollTop.vue";
export default {
    components: { Toast, ScrollTop },
};
</script>
