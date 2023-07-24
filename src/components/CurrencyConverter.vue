<script setup>
import { ref, computed } from "vue";
const props = defineProps(["data"]);
const { data } = props;

const fromCurrency = ref("");
const toCurrency = ref("");
const toggleModelValues = () => {
  [fromCurrency.value, toCurrency.value] = [
    toCurrency.value,
    fromCurrency.value,
  ];
};
const mainDirection = ref(true);
const currencyValue = ref("");
const countedVal = computed(() => convert(currencyValue.value));
const convert = () => {
  if (
    fromCurrency.value !== "" &&
    toCurrency.value !== "" &&
    currencyValue.value > 0
  ) {
    return (
      parseFloat(currencyValue.value * data.Valute[fromCurrency.value].Value) /
      parseFloat(data.Valute[toCurrency.value].Value)
    ).toFixed(4);
  }
  return "";
};
</script>

<template>
  <div class="converter-wrapper" :key="mainDirection">
    <div class="col-from">
      <select v-model="fromCurrency" :key="fromCurrency">
        <option
          v-for="(item, index) in data.Valute"
          :value="item.CharCode"
          :key="index"
        >
          {{ item.CharCode }}
        </option>
      </select>
      <input type="number" v-model="currencyValue" />
    </div>
    <div class="col-arrow">
      <span @click="toggleModelValues" >&#10231;</span>
    </div>
    <div class="col-to">
      <select v-model="toCurrency">
        <option
          v-for="(item, index) in data.Valute"
          :value="item.CharCode"
          :key="index"
        >
          {{ item.CharCode }}
        </option>
      </select>
      <div>{{ countedVal }}</div>
    </div>
  </div>
</template>

