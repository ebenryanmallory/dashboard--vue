<script>
  import Dashboard from './dashboard/Dashboard.vue'
  import Sidebar from './components/Sidebar.vue'
  export default {
    setup() {
      return {};
    },
    components: {
      Dashboard,
      Sidebar
    }
  };
</script>
<template>
  <div>
    <sidebar />
    <dashboard />
  </div>
</template>