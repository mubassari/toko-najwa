<template>
    <inertia-head title="Tambah User"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>TAMBAH DATA PENGGUNA</h4>
                <hr />
                <form-user
                    :user="user"
                    @submit="user.post('/user')"
                ></form-user>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Form from "@Components/Form/User.vue";

export default {
    components: { FormUser: Form },
    setup() {
        const user = useForm({ nama: "", no_telp: "", role: "" });
        return { user };
    },
};
</script>
