<template>
    <div class="absolute p-4 text-white topbar">
        Topbar
    </div>
</template>

<script>
    export default {
        name: "Topbar"
    };
</script>

<style scoped>
    .topbar {
        top: 0; 
        background: #424242;
        margin-left: 225px;
        width: calc(100vw - 260px);
    }
</style>