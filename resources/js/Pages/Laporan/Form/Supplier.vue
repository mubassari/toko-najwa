<template>
    <div class="card mb-4 shadow">
        <div class="card-header">
            <h5 class="card-title text-center">Cetak Laporan Supplier</h5>
        </div>
        <div class="card-body">
            <form-report
                v-bind="$attrs"
                :title="'Laporan Supplier'"
                :url="'/laporan/supplier'"
                :data="{ filter: 'Semua', type: null }"
            ></form-report>
        </div>
    </div>
</template>
<script>
import Form from "@Components/Form/Report.vue";

export default {
    components: { FormReport: Form },
};
</script>
