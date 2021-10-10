<template>
  <suspense>
    <template #default>
      <movies-db />
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
    MoviesDb: defineAsyncComponent(() => import('../external-api/MovieDB.vue'))
  }
}
</script>