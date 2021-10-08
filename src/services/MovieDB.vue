<template>
  <ul>
    <li :key="movies.id"> {{ movies.title }} </li>
  </ul>
</template>

<script>
export default {
    async setup() {
      const tmdb_api_key = import.meta.env.TMDB_API_KEY;
      const response_movies = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${tmdb_api_key}`);
      const movies = await response_movies.json();
      return { movies };
    }
}
</script>