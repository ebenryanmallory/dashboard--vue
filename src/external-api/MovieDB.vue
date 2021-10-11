<template>
  <section class="bg-gray-100 p-4">
    <ul>
      <li>
        <div class="flex my-4" v-for="movie in movies" :key="movie.id">
          <img v-bind:src="baseImageURL + movie.poster_path" 
            class="max-w-half max-h-96 mr-4" 
            alt="dynamic movie poster" />
          <div class="flex flex-column column">
            <h5 class="text-bold text-xl mb-2 inter">{{ movie.title }}</h5>
            <p class="mb-2"> {{ movie.overview }} </p>
            <p class="mb-2"> Year: {{ movie.release_date.slice(0,4) }} </p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import { supabase } from "../supabase";

  export default {
    async setup() {
      // const data['TMDB'] = import.meta.env.TMDB_TOKEN;
      let { data, error, status } = await supabase
        .from("Dashboards")
        .select(`TMDB`)
        .eq("id", 1)
        .single()
      if (error) { console.log(`Sorry, you may not have correct access to Supabase - status: ${status}`)};
      const baseURL = 'https://api.themoviedb.org/4';
      const response_list = await fetch(`${baseURL}/discover/movie?sort_by=popularity.desc`,
        {
          headers: {
            'Authorization': `Bearer ${data['TMDB']}`,
            'Content-Type': 'application/json;charset=utf-8'
          },
        }
      );
      const movielist = await response_list.json();
      return { movies: movielist.results.slice(0, 5) };
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