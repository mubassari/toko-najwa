<template>
    <transition name="fade" mode="out-in">
        <a
            class="scroll-to-top text-white rounded"
            @click="scrollToTop"
            v-if="scrolled"
        >
            <i class="fa-solid fa-angle-up"></i>
        </a>
    </transition>
</template>
<script>
import { ref } from "@vue/reactivity";
import { onBeforeMount, onBeforeUnmount } from "@vue/runtime-core";

export default {
    setup() {
        let scrolled = ref(false);
        let handleScroll = () => (scrolled.value = window.scrollY > 100);
        let scrollToTop = () => window.scrollTo(0, 0);
        onBeforeMount(() => window.addEventListener("scroll", handleScroll));
        onBeforeUnmount(() =>
            window.removeEventListener("scroll", handleScroll)
        );

        return { scrolled, scrollToTop };
    },
};
</script>
