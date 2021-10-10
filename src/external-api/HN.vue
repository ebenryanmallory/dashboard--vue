<template>
  <section class="bg-gray-100 p-4">
    <div class="container">
      <p class="font-bold text-center uppercase">New Hacker News Stories</p>
      <ul>
        <li :key="HN_article.id"> {{ HN_article.title }}
          <a href="{{HN_article.url}}" :key="HN_article.id"> {{ HN_article.url }} </a>
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
    let id = newHN[0]; // just using one article (newest)
    const response_HN = await fetch(`${urlBase}/item/${id}.json`);
    const HN_article = await response_HN.json();
    return { HN_article };
  }
}
</script>