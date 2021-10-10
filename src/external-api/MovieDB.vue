<template>
  <section class="">
    <ul>
      <li> 
        <p :key="movies.id" class="text-bold">{{ movies.title }}</p>
        <img v-bind:src="baseImageURL + movies.poster_path" class="max-w-half max-h-96" alt="dynamic movie poster" />
      </li>
      <li :key="movies.id"> {{ movies.overview }} </li>
      <li :key="movies.id"> {{ movies.homepage }} </li>
    </ul>
  </section>
</template>

<script>
export default {
    async setup() {
      const tmdb_api_key = import.meta.env.TMDB_API_KEY;
      const baseURL = 'https://api.themoviedb.org/3';
      const response_list = await fetch(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${tmdb_api_key}`);
      const movielist = await response_list.json();
      // Use only first result 
      let exampleID = movielist.results[0].id;
      const response_movies = await fetch(`${baseURL}/movie/${exampleID}?api_key=${tmdb_api_key}`);
      const movies = await response_movies.json();
      return { movies };
    },
    data() {
      return { baseImageURL: 'https://www.themoviedb.org/t/p/w440_and_h660_face/' }
    }
}
</script>