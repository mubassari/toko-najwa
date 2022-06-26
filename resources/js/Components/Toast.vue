<template>
    <transition name="slide-fade">
        <div
            v-if="toast.message && visible && !popstate"
            style="
                z-index: 3;
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
export default {
    data() {
        return { visible: false };
    },
    props: { toast: Object, popstate: Boolean },
    mounted() {
        this.handleToast();
    },
    watch: {
        toast: {
            deep: true,
            handler() {
                this.handleToast();
            },
        },
    },
    methods: {
        handleToast() {
            this.visible = true;
            setTimeout(() => (this.visible = false), 2000);
        },
    },
};
</script>
