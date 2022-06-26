require("./bootstrap");

import { createInertiaApp, Head, Link } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { createApp, h } from "vue";
import LayoutApp from "./Layouts/App";

createInertiaApp({
    resolve: async (name) => {
        const page = (await import(`./Pages/${name}`)).default;
        if (page.layout === undefined) page.layout = LayoutApp;
        return page;
    },
    title: (title) => `${title} | Toko Najwa`,
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("InertiaLink", Link)
            .component("InertiaHead", Head)
            .mixin({
                mounted() {
                    window.addEventListener(
                        "popstate",
                        () => (this.$page.props.popstate = true)
                    );
                },
                methods: {
                    getDate: (time) =>
                        new Date(time)
                            .toLocaleString("id-ID", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZoneName: "short",
                            })
                            .replace(".", ":"),
                    getMonthYear: (time) =>
                        new Date(time)
                            .toLocaleString("id-ID", {
                                month: "long",
                                year: "numeric",
                            })
                            .replace(".", ":"),
                    getDateFull: (time) =>
                        new Date(time)
                            .toLocaleString("id-ID", {
                                dateStyle: "full",
                            })
                            .replace(".", ":"),
                    getRupiah: (price) =>
                        Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        }).format(price),
                },
            })
            .mount(el);
    },
});

InertiaProgress.init();
