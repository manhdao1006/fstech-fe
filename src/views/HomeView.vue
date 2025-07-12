<template>
    <HeaderClient />
    <div class="wrapper"></div>
    <Footer />
</template>

<script setup lang="ts">
    import HeaderClient from '@/components/common/client/HeaderClient.vue'
    import Footer from '@/components/common/client/Footer.vue'
</script>

<style>
    .wrapper {
        width: 100%;
        background: linear-gradient(#ddefff, #d7f5ff);
    }
</style>
