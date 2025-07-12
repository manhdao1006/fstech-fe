<template>
    <div class="wrapper-admin">
        <SideBar />
        <div class="main">
            <HeaderAdmin />
            <CarList />
        </div>
    </div>
</template>

<script setup lang="ts">
    import SideBar from '@/components/common/admin/SideBar.vue'
    import HeaderAdmin from '@/components/common/admin/HeaderAdmin.vue'
    import CarList from '@/components/CarList.vue'
</script>

<style>
    .wrapper-admin {
        align-items: stretch;
        background: #222e3c;
        display: flex;
        width: 100%;
    }
    .main {
        background: #f5f7fb;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 0;
        overflow: hidden;
        transition:
            margin-left 0.35s ease-in-out,
            left 0.35s ease-in-out,
            margin-right 0.35s ease-in-out,
            right 0.35s ease-in-out;
        width: 100%;
    }
    .fs-header-admin {
        font-size: 14px;
    }
</style>
