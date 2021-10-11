<template>
    <nav class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            <p class="font-bold text-center uppercase inter">News & Entertainment</p>
            <p>Yep, all you really need in life is right here. Enjoy.</p>
            <hr />
            <ul class="items-center flex flex-wrap list-none">
                <li class="inline-block relative w-full">
                    <button class="cursor-pointer w-full my-2 hn px-4 py-3 leading-none 
                        bg-transparent flex items-center justify-center rounded-md border 
                        border-gray-300 hover:border-gray-400"
                        type="button"
                        @click="toggleNews('bg-white m-2 py-3 px-6')">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline fill-current" enable-background="new 0 0 24 24" width="22px" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M7,7h5v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10 V13z M15,9V5l4,4H15z"/></g></svg>
                        &nbsp;News
                    </button>
                </li>
                <li class="inline-block relative w-full">
                    <button class="cursor-pointer w-full my-2 tmdb px-4 py-3 leading-none 
                        bg-transparent flex items-center justify-center rounded-md border 
                        border-gray-300 hover:border-gray-400"
                        type="button"
                        @click="toggleEntertainment('bg-white m-2 py-3 px-6')">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="inline fill-current" width="22px" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M22,10V6c0-1.11-0.9-2-2-2H4C2.9,4,2.01,4.89,2.01,6v4C3.11,10,4,10.9,4,12s-0.89,2-2,2v4c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-4c-1.1,0-2-0.9-2-2S20.9,10,22,10z M13,17.5h-2v-2h2V17.5z M13,13h-2v-2h2V13z M13,8.5h-2v-2h2V8.5z"/></g></g></g></svg>
                        &nbsp;Entertainment
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
                toggleNewsClasses: "",
                toggleEntertainmentClasses: "",
            };
        },
        methods: {
            toggleNews: function (classes) {
               this.$emit('toggleNews', classes);
            },
            toggleEntertainment: function (classes) {
               this.$emit('toggleEntertainment', classes);
            }
        }
    };
</script>

<style scoped>
  .inter {
    font-family: 'Inter'
  }
  .hn {
    color: #ff6600
  }
  .tmdb {
    color: #0fb6df
  }
</style>