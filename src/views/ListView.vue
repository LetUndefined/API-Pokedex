<script setup lang="ts">
import pokeball from '@/assets/pokeball.svg';
import search from '@/assets/search-2.svg';
</script>

<template>
  <div class="list-view">
    <header>
      <div class="title">
        <img :src="pokeball" alt="pokeball" />
        <h1>Pokédex</h1>
      </div>
      <div class="search-container">
        <img class="search" :src="search" alt="search" name="search" />
        <input type="text" id="Search" placeholder="Search" />
      </div>
    </header>
    <main>
      <div class="pokemon-container">
        <router-link :to="{ name: 'DetailView', params: { id: 'bulbasaur' } }">
          <img src="https://img.pokemondb.net/sprites/home/normal/2x/avif/bulbasaur.avif" alt="" />
          <p>Bulbasaur</p>
        </router-link>
      </div>
      <div class="pokemon-container">
        <router-link :to="{ name: 'DetailView', params: { id: 'charmander' } }">
          <img src="https://img.pokemondb.net/sprites/home/normal/2x/avif/charmander.avif" alt="" />
          <p>Charmander</p>
        </router-link>
      </div>
      <div class="pokemon-container">
        <router-link :to="{ name: 'DetailView', params: { id: 'squirtle' } }">
          <img src="https://img.pokemondb.net/sprites/home/normal/2x/avif/squirtle.avif" alt="" />
          <p>Squirtle</p>
        </router-link>
      </div>
      <div class="pokemon-container">
        <router-link :to="{ name: 'DetailView', params: { id: 'pikachu' } }">
          <img src="https://img.pokemondb.net/sprites/home/normal/2x/avif/pikachu.avif" alt="" />
          <p>Pikachu</p>
        </router-link>
      </div>
    </main>
  </div>
</template>

<style scoped>
.list-view {
  height: 100vh;
  background-color: var(--color-primary);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

main {
  background-color: var(--color-grayscale-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem;
  flex-grow: 1;
  flex-wrap: wrap;
  align-content: start;
  border-radius: 8px;
  overflow-y: auto;
}

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
}

.pokemon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 16px;
  width: 98px;
  height: 108px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.pokemon-container img {
  max-width: 72px;
  max-height: 72px;
  width: auto;
  height: auto;
  margin-bottom: 0.5rem;
}

.pokemon-container p {
  font-size: 12px;
}
</style>
