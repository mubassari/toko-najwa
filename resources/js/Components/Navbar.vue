<template>
    <nav
        class="p-3 bg-white border-bottom d-flex justify-content-between align-items-center user-select-none"
    >
        <div class="d-flex align-items-top">
            <button class="btn btn-primary" @click="$emit('toggleSidebar')">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
        <span class="ms-3 text-uppercase fs-4">SISTEM INVENTORY BARANG</span>
        <div>
            <inertia-link
                class="text-decoration-none btn btn-link"
                href="/logout"
                method="post"
                as="button"
            >
                <i class="fa-solid fa-right-from-bracket"></i>
                Keluar
            </inertia-link>
        </div>
    </nav>
</template>
<script>
export default { emits: ["toggleSidebar"] };
</script>
