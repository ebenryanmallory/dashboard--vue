<template>
  <suspense>
    <template #default>
      <movies-db />
    </template>
    <template #fallback>
      <div class="flex w-full">
        <div class="loading bg-gray-100 w-half"></div>
        <div class="loading bg-gray-100 w-half"></div>
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