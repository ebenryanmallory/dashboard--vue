<template>
  <section class="bg-gray-100 p-4">
    <div class="container">
      <p class="font-bold text-center uppercase inter">Hacker News Stories</p>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <p class="inter">{{ item.title }}</p>
          <a v-bind:href="item.url" target="_blank">Read more</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  async setup() {
    const urlBase = 'https://hacker-news.firebaseio.com/v0';
    // topstories, newstories, beststories
    const response_list = await fetch(`${urlBase}/newstories.json`); // returns list (array)
    const newHN = await response_list.json();

    const stories = await Promise.all(
      newHN.slice(0, 5).map( async(articleID) => {
        const response_HN = await fetch(`${urlBase}/item/${articleID}.json`);
        const HN_article = await response_HN.json();
        return HN_article;
      })
    );
    return { items: stories };
  }
}
</script>

<style scoped>
  .inter {
    font-family: 'Inter'
  }
</style>