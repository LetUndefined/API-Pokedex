<script setup lang="ts">
import PokemonListHeader from '@/components/PokemonListHeader.vue';
import PokemonListItem from '@/components/PokemonListItem.vue';
import PokemonList from '@/components/PokemonList.vue';
import { ref } from 'vue';

const pokemonList = ref([
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Ivysaur' },
  { id: 3, name: 'Venusaur' },
  { id: 4, name: 'Charmander' },
  { id: 5, name: 'Charmeleon' },
  { id: 6, name: 'Charizard' },
  { id: 7, name: 'Squirtle' },
  { id: 8, name: 'Wartortle' },
  { id: 9, name: 'Blastoise' },
  { id: 25, name: 'Pikachu' },
]);
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
