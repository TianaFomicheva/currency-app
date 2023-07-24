<script setup>
import { ref, computed } from "vue";
import CurrencyItem from "./CurrencyItem.vue";

const props = defineProps(["data"]);
const { data } = props;
const search = ref("");
const filteredList = computed(() => {
  return Object.values(data.Valute).filter(
    (item) =>
      new RegExp(search.value, "i").test(item.CharCode) ||
      new RegExp(search.value, "i").test(item.Name)
  );
});
</script>

<template>
  <div class="wrapper">
    <div class="output">
      <div class="input-wrapper">
        <input type="text" v-model="search" />
        <button>Поиск</button>
      </div>
    </div>
    <div class="list">
      <div v-for="item in filteredList" :key="item.NumCode">
        <CurrencyItem :item="item" />
      </div>
    </div>
  </div>
</template>

