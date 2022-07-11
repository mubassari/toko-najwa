<template>
    <inertia-head title="Halaman Utama"></inertia-head>
    <section
        class="row m-0 px-5 justify-content-center align-items-center gap-3 bg-dark"
        style="padding-top: 3.5rem !important; padding-bottom: 6rem !important"
    >
        <div
            class="col-lg-8 col-12 order-lg-1 order-2 text-white text-lg-start text-center my-5"
        >
            <h1>Toko Najwa</h1>
            <p class="fst-italic">
                Jalan A. Yani No. 03, Pasar Rudina Handil 2, Kecamatan Muara
                Jawa,<br />Kabupaten Kutai Kartanegara, 75261 Telp.
                0812345677891
            </p>
            <p class="mt-5 fs-5 fw-bold text-uppercase">
                Menjual Berbagai Macam Pakaian Anak,<br />Seragam Sekolah,
                Pakaian Muslim, dan lain-lain
            </p>
        </div>
        <div
            class="col-lg col-12 order-lg-2 order-1 card shadow my-5 user-select-none"
            style="width: 500px"
        >
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
    </section>
    <transition name="fade" mode="out-in">
        <div
            class="sticky-bottom text-white d-flex justify-content-center"
            v-if="!scrolled"
        >
            <div
                role="button"
                class="mb-3"
                @click="
                    $refs['ringkasan'].scrollIntoView({ behavior: 'smooth' })
                "
            >
                <i class="fa-solid fa-chevron-down"></i>
            </div>
        </div>
    </transition>
    <section
        class="container p-5 text-center justify-content-center"
        style="scroll-margin-top: 100px"
        ref="ringkasan"
    >
        <div class="mb-5">
            <h1>Ringkasan</h1>
        </div>
        <div class="row justify-content-center">
            <div
                class="col-lg-4 col-md-6 col-12 mb-4"
                v-for="(data, key) in ringkasan"
                :key="key"
            >
                <div class="shadow card rounded text-white">
                    <div
                        class="card-body btn btn-primary text-end text-uppercase p-4"
                    >
                        <div class="card-title h2 fw-bold py-2">
                            {{ key }}
                        </div>
                        <div class="card-subtitle fst-italic h3">
                            {{ data }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "@vue/reactivity";
import Guest from "./../Layouts/Guest.vue";
import { onBeforeMount, onBeforeUnmount } from "@vue/runtime-core";

export default {
    layout: Guest,
    props: { ringkasan: Object },
    setup() {
        let scrolled = ref(false);
        let handleScroll = (event) => (scrolled.value = window.scrollY > 250);
        onBeforeMount(() => window.addEventListener("scroll", handleScroll));
        onBeforeUnmount(() =>
            window.removeEventListener("scroll", handleScroll)
        );

        const login = useForm({ no_telp: "", password: "", remember: false });
        const showPassword = ref(false);
        let submit = () => login.post("/login");

        let onlyNumber = () => {
            login.clearErrors("no_telp");
            login.no_telp = login.no_telp.replaceAll(/^0|\D/g, "");
        };

        return {
            scrolled,
            showPassword,
            login,
            submit,
            onlyNumber,
        };
    },
};
</script>
