<template>
    <inertia-head title="Masuk Log"></inertia-head>
    <toast :toast="$page.props.toast" :popstate="$page.props.popstate" />

    <main class="w-100 m-auto py-5" style="max-width: 500px">
        <div class="card shadow">
            <div class="card-body">
                <h3 class="card-title mb-3 fw-normal text-center">Masuk Log</h3>
                <form @submit.prevent="submit">
                    <div class="mb-3">
                        <label class="form-label">Nomor Telepon</label>
                        <div class="input-group">
                            <span class="input-group-text">62</span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="81234567890"
                                :disabled="login.processing"
                                :class="{ 'is-invalid': login.errors.no_telp }"
                                v-model="login.no_telp"
                                @input="onlyNumber"
                            />
                            <transition name="fade">
                                <div
                                    v-if="login.errors.no_telp"
                                    class="invalid-feedback"
                                >
                                    {{ login.errors.no_telp }}
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Kata Sandi</label>
                        <div class="input-group">
                            <input
                                :type="showPassword ? 'text' : 'password'"
                                class="form-control"
                                placeholder="Kata Sandi"
                                :disabled="login.processing"
                                :class="{ 'is-invalid': login.errors.password }"
                                v-model="login.password"
                                @input="login.clearErrors('password')"
                            />
                            <span
                                class="input-group-text"
                                @click="showPassword = !showPassword"
                                ><i
                                    class="fa"
                                    :class="
                                        showPassword ? 'fa-eye' : 'fa-eye-slash'
                                    "
                                ></i
                            ></span>
                            <transition name="fade">
                                <div
                                    v-if="login.errors.password"
                                    class="invalid-feedback"
                                >
                                    {{ login.errors.password }}
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="row d-flex align-items-center">
                        <div class="col checkbox mb-3">
                            <label>
                                <input
                                    type="checkbox"
                                    v-model="login.remember"
                                />
                                Ingat Saya
                            </label>
                        </div>
                        <div class="col">
                            <button
                                type="submit"
                                class="w-100 btn btn-lg btn-primary"
                                :disabled="login.processing"
                            >
                                Masuk
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Toast from "@Components/Toast.vue";
import { ref } from "@vue/reactivity";

export default {
    layout: null,
    remember: "login",
    components: { Toast },
    setup() {
        const login = useForm({ no_telp: "", password: "", remember: false });
        const showPassword = ref(false);
        let submit = () => {
            login.post("/login");
        };

        let onlyNumber = () => {
            login.clearErrors("no_telp");
            login.no_telp = login.no_telp.replaceAll(/^0|\D/g, "");
        };
        return { showPassword, login, submit, onlyNumber };
    },
};
</script>
