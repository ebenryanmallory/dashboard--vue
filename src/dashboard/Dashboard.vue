<script>
    import Topbar from '../components/Topbar.vue'
    import Sidebar from '../components/Sidebar.vue'
    import News from '../components/News.vue'
    import Entertainment from '../components/Entertainment.vue'
    export default {
      data() {
        return {
          newsClasses: "",
          entertainmentClasses: "",
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
              this.newsClasses = classes;
              this.entertainmentClasses = 'hidden';
              console.log(this.newsClasses)
              console.log(this.entertainmentClasses)
          },
          toggleEntertainment: function (classes) {
              this.entertainmentClasses = classes;
              this.newsClasses = 'hidden';
              console.log(this.newsClasses)
              console.log(this.entertainmentClasses)
          }
        }
    };
</script>

<template>
  <div class="p-8">
    <div class="absolute bg-purple-500 h-96 w-full top-color"></div>
    <topbar />
    <sidebar @toggleNews="toggleNews" @toggleEntertainment="toggleEntertainment" />
    <div v-bind:class="newsClasses" class="content-margin">
      <news />
    </div>
    <div v-bind:class="entertainmentClasses" class="content-margin">
      <entertainment />
    </div>
  </div>
</template>

<style scoped>
  .content-margin {
    margin: 40px 0px 0px 255px;
  }
  .top-color {
    z-index: -1;
  }
</style>