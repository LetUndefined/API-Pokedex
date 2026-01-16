<script setup lang="ts">
import PokemonListHeader from '@/components/PokemonListHeader.vue';
import PokemonListItem from '@/components/PokemonListItem.vue';
import PokemonList from '@/components/PokemonList.vue';

import { usePokemonStore } from '@/stores/pokemon';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const pokemonStore = usePokemonStore();
const { pokemonList } = storeToRefs(pokemonStore);
const { fetchPokemonList } = pokemonStore;

onMounted(async () => {
  await fetchPokemonList();
});
</script>

<template>
  <div class="list-view">
    <pokemon-list-header />
    <main>
      <PokemonList>
        <pokemon-list-item
          v-for="pokemon in pokemonList"
          :key="pokemon.id"
          :name="pokemon.name"
          :id="pokemon.id"
        />
      </PokemonList>
    </main>
  </div>
</template>

<style scoped>
.list-view {
  height: 100vh;
  background-color: var(--color-primary);
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
}

main {
  background-color: var(--color-grayscale-white);
  border-radius: 8px;
  padding: 1rem;
  flex-grow: 1;
  overflow-y: auto;
}
</style>
