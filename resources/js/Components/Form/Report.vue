<template>
    <h5 class="card-subtitle mb-3">{{ title }}</h5>
    <slot />
    <div class="btn-group">
        <button class="btn btn-success" @click="printPDF()">
            <i class="fas fa-file-pdf me-2"></i> Cetak PDF
        </button>
        <inertia-link
            v-if="$attrs.auth.user.can.send_to_telegram"
            class="btn btn-primary"
            :href="url"
            :data="{ ...data, title, telegram: true }"
            method="post"
            as="button"
            type="button"
            preserve-scroll
        >
            <i class="fas fa-paper-plane me-2"></i> Kirim PDF ke Telegram
        </inertia-link>
    </div>
</template>
<script>
import NProgress from "nprogress";
export default {
    props: {
        title: String,
        url: String,
        data: Object,
    },
    setup(props) {
        function printPDF() {
            NProgress.start();
            axios
                .post(
                    props.url,
                    { ...props.data, title: props.title, telegram: false },
                    { responseType: "blob" }
                )
                .then((response) => {
                    const url = window.URL.createObjectURL(
                        new Blob([response.data])
                    );
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", props.title + ".pdf");
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    NProgress.done();
                });
        }
        return { printPDF };
    },
};
</script>
