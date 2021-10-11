<template>
  <section class="bg-gray-100 p-4 mt-16">
    <div class="container">
      <p class="font-bold text-center uppercase inter">Hacker News Stories</p>
      <ul>
        <li v-for="(story, index) in stories" :key="index">
          <p class="inter">{{ story.title }}</p>
          <a v-bind:href="story.url" target="_blank">Go to source</a>
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
    const response_list = await fetch(`${urlBase}/newstories.json?print=pretty`); // returns list (array)
    const newHN = await response_list.json();

    const articles = await Promise.all(
      newHN.slice(0, 5).map( async(articleID) => {
        const response_HN = await fetch(`${urlBase}/item/${articleID}.json?print=pretty`);
        const HN_article = await response_HN.json();
        return HN_article;
      })
    );
    return { stories: articles };
  }
}
</script>

<style scoped>
  .inter {
    font-family: 'Inter'
  }
</style>