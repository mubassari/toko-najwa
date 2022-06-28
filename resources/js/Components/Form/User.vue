<template>
    <form @submit.prevent="$emit('submit')">
        <div class="mb-3">
            <label class="form-label">Nama Pengguna</label>
            <input
                type="text"
                class="form-control"
                :disabled="user.processing"
                :class="{ 'is-invalid': user.errors.nama }"
                v-model="user.nama"
                @input="user.clearErrors('nama')"
                placeholder="Masukkan Nama Pengguna"
            />
            <transition name="fade">
                <div v-if="user.errors.nama" class="invalid-feedback">
                    {{ user.errors.nama }}
                </div>
            </transition>
        </div>
        <div class="mb-3">
            <label class="form-label">Nomor Telepon Pengguna</label>
            <input
                type="text"
                class="form-control"
                :disabled="user.processing"
                :class="{ 'is-invalid': user.errors.no_telp }"
                v-model="user.no_telp"
                @input="user.clearErrors('no_telp')"
                placeholder="Masukkan Nomor Telepon Pengguna"
            />
            <transition name="fade">
                <div v-if="user.errors.no_telp" class="invalid-feedback">
                    {{ user.errors.no_telp }}
                </div>
            </transition>
        </div>
        <div class="mb-3" v-if="!disableRole">
            <label class="form-label">Role Pengguna</label>
            <select
                class="form-select text-capitalize"
                :disabled="user.processing"
                :class="{ 'is-invalid': user.errors.role }"
                v-model="user.role"
                @click="user.clearErrors('role')"
            >
            <option disabled selected value="">— Pilih Role —</option>
                <option value="admin">Admin</option>
                <option value="staf">Staf</option>
            </select>
            <transition name="fade">
                <div v-if="user.errors.role" class="invalid-feedback">
                    {{ user.errors.role }}
                </div>
            </transition>
        </div>
        <div class="mb-3">Kata Sandi: <b>12345</b></div>
        <div class="mb-3">
            <button
                type="submit"
                :disabled="user.processing || !user.isDirty"
                class="btn btn-primary btn-md shadow-sm me-2"
            >
                SIMPAN
            </button>
            <span
                :class="{ disabled: user.processing || !user.isDirty }"
                @click="user.reset()"
                class="btn btn-warning btn-md shadow-sm"
            >
                RESET
            </span>
        </div>
    </form>
</template>
<script>
export default {
    props: { user: Object, disableRole:Boolean },
    remember: "user",
};
</script>
