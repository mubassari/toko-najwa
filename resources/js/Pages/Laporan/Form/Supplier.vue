<template>
    <accordion-card :title="title">
        <form-report
            v-bind="$attrs"
            :title="'Laporan Supplier'"
            :url="'/laporan/supplier'"
            :data="{ filter: 'Semua', type: null }"
        ></form-report>
    </accordion-card>
</template>
<script>
import FormReport from "@Components/Form/Report.vue";
import AccordionCard from "@Components/AccordionCard.vue";

export default {
    components: { FormReport, AccordionCard },
    props: { hide: Boolean },
    emits: ["hideToggle"],
    data() {
        return {
            title: "Cetak Laporan Supplier",
        };
    },
};
</script>
