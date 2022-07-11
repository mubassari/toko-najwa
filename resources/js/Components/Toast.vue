<template>
    <transition name="slide-fade">
        <div
            v-if="toast.message && visible && !popstate"
            style="
                z-index: 9999999999;
                position: fixed;
                right: 1rem;
                top: 1rem;
                width: 20rem;
            "
        >
            <div
                aria-live="polite"
                aria-atomic="true"
                class="d-flex flex-column-reverse"
                style="position: relative"
            >
                <div
                    class="toast show align-items-center border-5"
                    :class="
                        'border-' + (toast.status ? toast.status : 'primary')
                    "
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div class="d-flex">
                        <div class="toast-body">{{ toast.message }}</div>
                        <button
                            type="button"
                            class="btn-close me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            @click="visible = false"
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { onMounted, ref, watch } from "vue";
export default {
    props: { toast: Object, popstate: Boolean },
    setup(props) {
        let visible = ref(false);
        let handleToast = () => {
            visible.value = true;
            setTimeout(() => (visible.value = false), 2000);
        };
        onMounted(() => handleToast());
        watch(props.toast, () => handleToast(), { deep: true });
        return { visible };
    },
};
</script>
