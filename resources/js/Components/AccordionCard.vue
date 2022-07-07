<template>
    <div class="card mb-4 shadow user-select-none">
        <div
            role="button"
            class="card-header d-flex align-items-center justify-content-between"
            :class="{ 'border-bottom-0': hide }"
            @click="hide = !hide"
        >
            <div></div>
            <h5 class="card-title text-center">{{ title }}</h5>
            <i
                class="flex-end fa-solid fa-angle-up"
                style="transition: transform 0.5s ease-out"
                :style="
                    hide
                        ? 'transform: rotateZ(0deg)'
                        : 'transform: rotateZ(180deg)'
                "
            ></i>
        </div>
        <transition name="fade" mode="out-in">
            <div class="card-body" v-if="!hide">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props: { title: String },
    data() {
        return {
            hide: false,
        };
    },
};
</script>
