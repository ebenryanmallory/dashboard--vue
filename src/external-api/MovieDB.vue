<template>
  <section class="bg-gray-100 p-4 shadow">
    <ul>
      <li v-for="(movie, index) in movies" :key="movie.id">
        <div class="flex my-4">
          <img @click="openModal(index)" v-bind:src="baseImageURL + movie.poster_path" 
            class="max-w-half max-h-96 mr-4 cursor-pointer" 
            alt="dynamic movie poster" />
          <div class="flex flex-column column">
            <h5 @click="openModal(index)" class="text-bold text-xl mb-2 inter cursor-pointer">{{ movie.title }}</h5>
            <p class="mb-2"> {{ movie.overview }} </p>
            <p class="mb-2"> Year: {{ movie.release_date.slice(0,4) }} </p>
            <sl-dialog id={{movie-id}} label="Landscape view" class="dialog-width" style="--width: 85vw;">
              <h5 class="text-bold text-xl mb-2 inter">{{ movie.title }}</h5>
              <img v-bind:src="baseBackdropURL + movie.backdrop_path" 
                class="max-w-half max-h-96 mr-4" 
                alt="dynamic movie poster" />
              <br />
              <p class="mb-2"> {{ movie.overview }} </p>
              <p class="mb-2"> Year: {{ movie.release_date.slice(0,4) }} </p>
            </sl-dialog>
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </section>
</template>

<script>

  export default {
    async setup() {
      const baseURL = 'https://api.themoviedb.org/4';
      const response_list = await fetch(`${baseURL}/discover/movie?sort_by=popularity.desc`,
        {
          headers: {
            'Authorization': `Bearer ${process.env.TMDB_TOKEN}`,
            'Content-Type': 'application/json;charset=utf-8'
          },
        }
      );
      const movielist = await response_list.json();
      return { movies: movielist.results.slice(0, 5) };
    },
    data() {
      return { baseImageURL: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/',
              baseBackdropURL: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/' }
    },
    methods: {
      openModal: function (index) {
        const dialog = document.querySelectorAll('.dialog-width')[index];
        dialog.show();
      },
      closeModal: function (index) {
        const dialog = document.querySelectorAll('.dialog-width')[index];
        dialog.hide();
      }
    }
  }

  import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';

</script>

<style scoped>
  .column {
    flex-direction: column;
  }
</style>