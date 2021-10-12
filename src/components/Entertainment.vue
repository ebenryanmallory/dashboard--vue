<template>
  <suspense>
    <template #default>
      <movies-db />
    </template>
    <template #fallback>
      <div class="flex w-full bg-gray-100 shadow-sm">
        <div class="loading w-1/2 m-4 bg-gray-200"></div>
        <div class="loading w-1/2 m-4 bg-gray-200"></div>
      </div>
    </template>
  </suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    MoviesDb: defineAsyncComponent(() => import('../external-api/MovieDB.vue'))
  }
}
</script>

<style scoped>
  .loading {
    min-height: 265px;
  }
</style>