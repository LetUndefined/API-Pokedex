<script setup lang="ts">
import pokeball from '@/assets/pokeball.svg';
import search from '@/assets/search-2.svg';
import { usePokemonStore } from '@/stores/pokemon';
import { storeToRefs } from 'pinia';

const store = usePokemonStore();
const { inputValue } = storeToRefs(store);
</script>

<template>
  <header>
    <div class="title">
      <img :src="pokeball" alt="pokeball" />
      <h1>Pokédex</h1>
    </div>
    <div class="search-container">
      <img class="search" :src="search" alt="search" name="search" />
      <input v-model="inputValue" type="text" id="Search" placeholder="Search" />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  padding: 12px 12px 24px 10px;
  flex-direction: column;
}

.title {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
}

header h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: var(--color-grayscale-white);
}

header img {
  width: 23px;
  height: 24px;
  filter: brightness(0) invert(1);
}

.search-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 320px;
  height: 32px;
  border-radius: 16px;
  margin-top: 8px;
  background-color: var(--color-grayscale-white);
}

input {
  border: none;
  outline: none;
}
</style>
