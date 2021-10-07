<script>
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
    <sidebar @toggleNews="toggleNews" />
    <p>Dashboard</p>
    <div v-bind:class="toggleNewsClasses">
      <news />
    </div>
    <div v-bind:class="toggleEntertainmentClasses">
      <entertainment />
    </div>
  </div>
</template>