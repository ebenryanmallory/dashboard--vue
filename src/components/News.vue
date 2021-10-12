<template>
  <suspense>
    <template #default>
      <hacker-news />
    </template>
    <template #fallback>
      <div class="flex w-full">
        <div class="loading bg-gray-300 shadow-sm w-half">hello</div>
        <div class="loading bg-gray-300 shadow-sm w-half">hello</div>
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
    min-height: 265px;
  }
</style>