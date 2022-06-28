<template>
    <toast :toast="$page.props.toast" :popstate="$page.props.popstate" />
    <nav class="p-3 bg-white border-bottom sticky-top shadow">
        <div class="d-flex justify-content-between align-items-center">
            <div class="ms-3 text-uppercase fs-4">
                <span class="text-decoration-none text-body user-select-none">
                    SISTEM INVENTORY BARANG
                </span>
            </div>
        </div>
    </nav>
    <main>
        <slot></slot>
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
