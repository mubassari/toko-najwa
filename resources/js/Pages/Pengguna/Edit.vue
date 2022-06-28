<template>
    <inertia-head :title="`Ubah User | ${user.nama}`"></inertia-head>
    <div>
        <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h4>UBAH DATA PENGGUNA</h4>
                <hr />
                <form-user
                    :user="users"
                    :disableRole="
                        $attrs.auth.user.role.toLowerCase() ==
                        user.role.toLowerCase()
                    "
                    @submit="users.put('/user/' + id)"
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
    props: { user: Object },
    setup(props) {
        const id = props.user.id;
        const users = useForm({
            nama: props.user.nama,
            no_telp: props.user.no_telp,
            role: props.user.role,
        });
        return { users, id };
    },
};
</script>
