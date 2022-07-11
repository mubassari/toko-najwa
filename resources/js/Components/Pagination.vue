<template>
    <nav v-if="links.length > 3">
        <ul class="pagination justify-content-center">
            <li
                class="page-item"
                v-for="(link, p) in links"
                :key="p"
                :class="{
                    active: link.active,
                    disabled: link.url === null,
                }"
            >
                <component
                    :is="link.url ? 'inertia-link' : 'span'"
                    class="page-link"
                    :href="link.url"
                    v-html="link.label"
                ></component>
            </li>
        </ul>
    </nav>
</template>
<script>
export default { props: { links: Array } };
</script>
