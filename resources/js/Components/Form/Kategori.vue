<template>
    <form @submit.prevent="$emit('submit')">
        <div class="mb-3">
            <label class="form-label">Kode Kategori</label>
            <input
                type="text"
                class="form-control"
                maxlength="3"
                :disabled="kategori.processing"
                :class="{ 'is-invalid': kategori.errors.kode }"
                v-model="kategori.kode"
                @input="kategori.clearErrors('kode')"
                placeholder="Masukkan Kode Kategori"
            />
            <transition name="fade">
                <div v-if="kategori.errors.kode" class="invalid-feedback">
                    {{ kategori.errors.kode }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Nama Kategori</label>
            <input
                type="text"
                class="form-control"
                :disabled="kategori.processing"
                :class="{ 'is-invalid': kategori.errors.nama }"
                v-model="kategori.nama"
                @input="kategori.clearErrors('nama')"
                placeholder="Masukkan Nama Kategori"
            />
            <transition name="fade">
                <div v-if="kategori.errors.nama" class="invalid-feedback">
                    {{ kategori.errors.nama }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <button
                type="submit"
                :disabled="kategori.processing || !kategori.isDirty"
                class="btn btn-primary btn-md shadow-sm me-2"
            >
                SIMPAN
            </button>
            <span
                :class="{ disabled: kategori.processing || !kategori.isDirty }"
                @click="kategori.reset()"
                class="btn btn-warning btn-md shadow-sm"
            >
                RESET
            </span>
        </div>
    </form>
</template>
<script>
export default {
    props: { kategori: Object },
    remember: "kategori",
    watch: {
        "kategori.kode": function (val) {
            this.kategori.kode = this.kategori.kode
                .toUpperCase()
                .replaceAll(/[^A-Z]/g, "");
        },
    },
};
</script>
