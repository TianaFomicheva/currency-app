<script setup>
import { computed, onBeforeMount } from "vue";
import { useCurrenciesStore } from "@/store.js";
const store = useCurrenciesStore();
onBeforeMount(() => {
  store.loadData();
});
const data = computed(() => store.data);
</script>

<template>
  <div class="container">
    <header>
      <router-link to="/">List</router-link>
      <span>/</span>
      <router-link to="/converter">Converter</router-link>
    </header>
    <router-view :data="data" :key="data.Date"></router-view>
  </div>
</template>


