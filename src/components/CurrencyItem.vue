<script setup>
import { ref } from "vue";
const props = defineProps(["item"]);
const { item } = props;
const trend = (current, previous) => current > previous ? " ▲" : (current < previous ? " ▼" : '');
const difference = (current, previous) => (current - previous).toFixed(4)
const differenceSymbol = (current, previous) => current > previous ? " +"  : '';
const trendInfo = (current, previous) =>  differenceSymbol(current, previous) + difference(current, previous)  + trend(current, previous)
const blockColor = (current, previous) => current > previous ? 'green' : (current < previous ? 'red' : 'black') 
const isMainActive = ref(true)
const toggleMainActive = (state) => {
  isMainActive.value = state
};
</script>

<template>
  <div class="pair-item">
          <div class="pair-item__header">
            <div @click="toggleMainActive(true)" :class="{'active': isMainActive}">
              {{ item.CharCode }}
            </div>
            <div @click="toggleMainActive(false)" :class="{'active': !isMainActive}">RUB</div>
          </div>
          <div class="pair-item__body">
            
            <div v-if="isMainActive" :style="{'color': blockColor(item.Value, item.Previous)}">
              1 {{ item.Name }} - {{ item.Value }} RUB   
              <small v-html="trendInfo(item.Value, item.Previous)"></small>
            </div>
            <div v-else :style="{'color': blockColor(item.Previous, item.Value)}">
              1 RUB - {{ parseFloat(1 / item.Value).toFixed(4) }} 
              {{ item.Name }}
              <small v-html="trendInfo(item.Previous, item.Value)"></small>
            </div>
          </div>
        </div>
</template>