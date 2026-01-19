<script setup lang="ts">
import PokemonListHeader from '@/components/PokemonListHeader.vue';
import PokemonListItem from '@/components/PokemonListItem.vue';
import PokemonList from '@/components/PokemonList.vue';

import { usePokemonStore } from '@/stores/pokemon';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';

const pokemonStore = usePokemonStore();

const { fetchPokemonList } = pokemonStore;
const { isLoading } = storeToRefs(pokemonStore);
const { filterPokemon } = storeToRefs(pokemonStore);
const { inputValue } = storeToRefs(pokemonStore);

onMounted(async () => {
  inputValue.value = '';
  await fetchPokemonList();
});
</script>

<template>
  <LoadingIndicator v-if="isLoading" />
  <div v-else class="list-view">
    <pokemon-list-header />

    <main>
      <PokemonList>
        <pokemon-list-item
          v-for="pokemon in filterPokemon"
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
