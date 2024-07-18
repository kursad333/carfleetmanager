<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/cars">Cars</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  background-color: #282828;
  color: white;
  padding: 10px;
}
nav {
  display: flex;
  gap: 20px;
  align-content: center;
  justify-content: center;
}

nav a {
  font-size: 1.2em;
  color: white;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
