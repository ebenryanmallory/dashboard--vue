<template>
  <section class="bg-gray-100 p-4">
    <ul>
      <li>
        <div class="flex" :key="movies.id">
          <img v-bind:src="baseImageURL + movies.poster_path" 
            class="max-w-half max-h-96 mr-4" 
            alt="dynamic movie poster" />
          <div class="flex flex-column column">
            <h5 class="text-bold text-xl mb-2 inter">{{ movies.title }}</h5>
            <p class="mb-2"> {{ movies.overview }} </p>
            <p>Visit <a v-bind:href="movies.homepage" target="_blank">movie home</a></p>
          </div>
        </div>
      </li>
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

<style scoped>
  .column {
    flex-direction: column;
  }
  .inter {
    font-family: 'Inter'
  }
</style>