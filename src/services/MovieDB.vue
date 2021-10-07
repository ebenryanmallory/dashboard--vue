<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id"> {{ todo }} | in todo fields</li>
  </ul>
</template>

<script>
export default {
    async setup() {
    const response_todo = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todos = await response_todo.json();
    return { todos };
  }
}
</script>