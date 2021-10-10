<template>
    <div class="absolute p-4 text-white topbar">
        Made with 
        <svg xmlns="http://www.w3.org/2000/svg" class="max-w-4 max-h-4 inline" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
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
        margin-left: 224px;
        width: calc(100vw - 256px);
    }
</style>