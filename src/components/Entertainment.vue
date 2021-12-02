<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    MoviesDb: defineAsyncComponent(() => import('../external-api/MovieDB.vue'))
  }
}

import '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';

</script>

<template>
  <suspense>
    <template #default>
      <movies-db />
    </template>
    <template #fallback>
      <div class="flex w-full bg-gray-100 shadow-sm">
        <div class="loading w-1/2 m-4 bg-gray-200">
          <div class="skeleton-overview">
            <sl-skeleton></sl-skeleton>
            <sl-skeleton></sl-skeleton>
            <sl-skeleton></sl-skeleton>
          </div>
        </div>
        <div class="loading w-1/2 m-4 bg-gray-200">
          <div class="skeleton-overview">
            <sl-skeleton></sl-skeleton>
            <sl-skeleton></sl-skeleton>
            <sl-skeleton></sl-skeleton>
          </div>
        </div>
      </div>
    </template>
  </suspense>
</template>

<style scoped>
  .loading {
    min-height: 265px;
  }
  .skeleton-overview header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .skeleton-overview header sl-skeleton:last-child {
    flex: 0 0 auto;
    width: 30%;
  }

  .skeleton-overview sl-skeleton {
    margin-bottom: 1rem;
  }

  .skeleton-overview sl-skeleton:nth-child(1) {
    float: left;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .skeleton-overview sl-skeleton:nth-child(3) {
    width: 95%;
  }

  .skeleton-overview sl-skeleton:nth-child(4) {
    width: 80%;
  }
</style>