<template>
    <div class="card mb-4 shadow user-select-none">
        <div
            role="button"
            class="card-header d-flex align-items-center justify-content-between"
            :class="{ 'border-bottom-0': hide }"
            @click="
                $emit('hideToggle', 'supplier');
                $refs['icon'].style.transform = hide
                    ? 'rotateZ(0deg)'
                    : 'rotateZ(180deg)';
            "
        >
            <div></div>
            <h5 class="card-title text-center">Cetak Laporan Supplier</h5>
            <i
                class="flex-end fa-solid fa-angle-up"
                ref="icon"
                style="transition: transform 0.5s ease-out"
            ></i>
        </div>
        <transition name="fade" mode="out-in">
            <div class="card-body" v-if="!hide">
                <form-report
                    v-bind="$attrs"
                    :title="'Laporan Supplier'"
                    :url="'/laporan/supplier'"
                    :data="{ filter: 'Semua', type: null }"
                ></form-report>
            </div>
        </transition>
    </div>
</template>
<script>
import Form from "@Components/Form/Report.vue";

export default {
    components: { FormReport: Form },
    props: { hide: Boolean },
    emits: ["hideToggle"],
};
</script>
