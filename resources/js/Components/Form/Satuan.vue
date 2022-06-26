<template>
    <form @submit.prevent="$emit('submit')">
        <div class="mb-3">
            <label class="form-label">Nama Satuan</label>
            <input
                type="text"
                class="form-control"
                :disabled="satuan.processing"
                :class="{ 'is-invalid': satuan.errors.nama }"
                v-model="satuan.nama"
                @input="satuan.clearErrors('nama')"
                placeholder="Masukkan Nama Satuan"
            />
            <transition name="fade">
                <div v-if="satuan.errors.nama" class="invalid-feedback">
                    {{ satuan.errors.nama }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <button
                type="submit"
                :disabled="satuan.processing || !satuan.isDirty"
                class="btn btn-primary btn-md shadow-sm me-2"
            >
                SIMPAN
            </button>
            <span
                :class="{ disabled: satuan.processing || !satuan.isDirty }"
                @click="satuan.reset()"
                class="btn btn-warning btn-md shadow-sm"
            >
                RESET
            </span>
        </div>
    </form>
</template>
<script>
export default {
    props: { satuan: Object },
    remember: "satuan",
};
</script>
