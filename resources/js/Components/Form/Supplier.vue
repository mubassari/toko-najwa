<template>
    <form @submit.prevent="$emit('submit')">
        <div class="mb-3">
            <label class="form-label">Nama Supplier</label>
            <input
                type="text"
                class="form-control"
                :disabled="supplier.processing"
                :class="{ 'is-invalid': supplier.errors.nama }"
                v-model="supplier.nama"
                @input="supplier.clearErrors('nama')"
                placeholder="Masukkan Nama Supplier"
            />
            <transition name="fade">
                <div v-if="supplier.errors.nama" class="invalid-feedback">
                    {{ supplier.errors.nama }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Alamat Supplier</label>
            <input
                type="text"
                class="form-control"
                :disabled="supplier.processing"
                :class="{ 'is-invalid': supplier.errors.alamat }"
                v-model="supplier.alamat"
                @input="supplier.clearErrors('alamat')"
                placeholder="Masukkan Alamat Supplier"
            />
            <transition name="fade">
                <div v-if="supplier.errors.alamat" class="invalid-feedback">
                    {{ supplier.errors.alamat }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Nomor Telepon Supplier</label>
            <div class="input-group">
                <span class="input-group-text">62</span>
                <input
                    type="text"
                    class="form-control"
                    :disabled="supplier.processing"
                    :class="{ 'is-invalid': supplier.errors.no_telp }"
                    v-model="supplier.no_telp"
                    @input="
                        supplier.clearErrors('no_telp');
                        onlyNumber();
                    "
                    placeholder="Masukkan Nomor Telepon Supplier"
                />
                <transition name="fade">
                    <div
                        v-if="supplier.errors.no_telp"
                        class="invalid-feedback"
                    >
                        {{ supplier.errors.no_telp }}
                    </div>
                </transition>
            </div>
        </div>
        <div class="mb-3">
            <button
                type="submit"
                :disabled="supplier.processing || !supplier.isDirty"
                class="btn btn-primary btn-md shadow-sm me-2"
            >
                SIMPAN
            </button>
            <span
                :class="{ disabled: supplier.processing || !supplier.isDirty }"
                @click="supplier.reset()"
                class="btn btn-warning btn-md shadow-sm"
            >
                RESET
            </span>
        </div>
    </form>
</template>
<script>
export default {
    props: { supplier: Object },
    remember: "supplier",
    computed: {
        onlyNumber() {
            this.supplier.clearErrors("no_telp");
            this.supplier.no_telp = this.supplier.no_telp.replaceAll(
                /^0|\D/g,
                ""
            );
        },
    },
};
</script>
