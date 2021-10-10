<script>
    import Topbar from '../components/Topbar.vue'
    import Sidebar from '../components/Sidebar.vue'
    import News from '../components/News.vue'
    import Entertainment from '../components/Entertainment.vue'
    export default {
      data() {
        return {
          toggleNewsClasses: "",
          toggleEntertainmentClasses: "",
        };
      },
      components: {
        Topbar,
        Sidebar,
        News,
        Entertainment
      },
      methods: {
          toggleNews: function (classes) {
              this.toggleNewsClasses = classes;
          },
          toggleEntertainment: function (classes) {
              this.toggleEntertainmentClasses = classes;
          }
        }
    };
</script>

<template>
  <div class="bg-gray-100 rounded-xl p-8 text-center">
    <topbar />
    <sidebar @toggleNews="toggleNews" />
    <div v-bind:class="toggleNewsClasses" class="content-margin">
      <news />
    </div>
    <div v-bind:class="toggleEntertainmentClasses" class="content-margin">
      <entertainment />
    </div>
  </div>
</template>

<style scoped>
.content-margin {
  margin: 40px 0px 0px 255px;
}
</style>