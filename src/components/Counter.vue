<script setup lang="ts">
import {useCounterStore} from "@/stores/counter";
import {ref} from "vue";

const counterStore = useCounterStore()

</script>

<template>
<h1>{{counterStore.count}}</h1>
  <h2>{{counterStore.doubleCount}}</h2>
  <button @click="counterStore.increment()">add one</button>
  <button @click="counterStore.down()">del one</button>
</template>

<style scoped>

</style>