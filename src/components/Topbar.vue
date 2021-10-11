<template>
    <div class="absolute p-4 text-white topbar">
        Made with 
        <svg xmlns="http://www.w3.org/2000/svg" class="max-w-4 max-h-4 inline mx-2" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="max-w-8 max-h-8 inline mx-2" viewBox="0 0 64 64"><defs><linearGradient x1="0" y1="-21.333" y2="85.333" id="A" x2="64" gradientUnits="userSpaceOnUse"><stop stop-color="#2383ae" offset="0%"/><stop stop-color="#6dd7b9" offset="100%"/></linearGradient></defs><path d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" fill="url(#A)" fill-rule="evenodd"/></svg>
        <!-- TMDB logo -->
        <img class="max-w-4 max-h-4 inline mx-2" :src="HNimage" />
        <img class="max-w-4 max-h-4 inline mx-2" :src=TMDBlogoUrl />
    </div>
</template>

<script>

import HNimage from "../assets/Hackernews_logo.png"
const TMDBlogoUrl = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg";

    export default {
        name: "Topbar",
        data: function () {
            return {
                HNimage: HNimage,
                TMDBlogoUrl: TMDBlogoUrl
            }
        }
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