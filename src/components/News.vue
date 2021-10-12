<template>
  <suspense>
    <template #default>
      <hacker-news />
    </template>
    <template #fallback>
      <div class="flex flex-col w-full bg-gray-100 shadow-sm mt-16">
        <div class="m-1 bg-gray-400" style="width: 150px; height: 30px;"></div>
        <div class="loading m-1 bg-gray-200"></div>
        <div class="loading m-1 bg-gray-300"></div>
        <div class="loading m-1 bg-gray-200"></div>
        <div class="loading m-1 bg-gray-300"></div>
        <div class="loading m-1 bg-gray-200"></div>
      </div>
    </template>
  </suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    HackerNews: defineAsyncComponent(() => import('../external-api/HN.vue'))
  }
}
</script>

<style scoped>
  .loading {
    min-height: 75px;
  }
</style>