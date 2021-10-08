<template>
  <ul>
    <li :key="todo.id"> {{ todo }} </li>
  </ul>
</template>

<script>
export default {
    async setup() {
      const tmdb_api_key = import.meta.env.TMDB_API_KEY;
      console.log(tmdb_api_key)
      const response_todo = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${tmdb_api_key}`);
      const todos = await response_todo.json();
      return { todos };
    }
}
</script>