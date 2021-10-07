<template>
  <suspense>
    <template #default>
      <hacker-news />
    </template>
    <template #fallback>
      <div>
        Loading...
      </div>
    </template>
  </suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    HackerNews: defineAsyncComponent(() => import('../services/HN.vue'))
  }
}
</script>