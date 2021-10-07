<template>
    <nav class="fixed md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            <p class="font-bold text-center uppercase">News & Entertainment</p>
            <hr />
            <ul class="items-center flex flex-wrap list-none">
                <li class="inline-block relative">
                    <button class="cursor-pointer text-black opacity-50 
                        px-3 py-1 text-xl leading-none 
                        bg-transparent rounded border border-solid 
                        border-transparent"
                        type="button"
                        @click="toggleNews('bg-white m-2 py-3 px-6')">
                        News
                    </button>
                </li>
                <li class="inline-block relative">
                    <button class="cursor-pointer text-black opacity-50 
                        px-3 py-1 text-xl leading-none 
                        bg-transparent rounded border border-solid 
                        border-transparent"
                        type="button"
                        v-on:click="toggleEntertainment('bg-white m-2 py-3 px-6')">
                        Entertainment
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                toggleNewsClasses: "hidden",
                toggleEntertainmentClasses: "hidden",
            };
        },
        methods: {
            toggleNews: function (classes) {
               this.$emit('toggleNews', classes);
            },
            toggleEntertainment: function (classes) {
               this.toggleEntertainmentClasses = classes;
            }
        }
    };
</script>