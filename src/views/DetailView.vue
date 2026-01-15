<script setup lang="ts">
import PokemonDetailHeader from '@/components/PokemonDetailHeader.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const chosenPokemon = ref(null);

const pokemonList = ref([
  {
    id: 1,
    name: 'bulbasaur',
    types: ['grass', 'poison'],
    weight: 6.9,
    height: 0.7,
    moves: ['Chlorophyll', 'Overgrow'],
    description:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    stats: {
      hp: 45,
      atk: 49,
      def: 49,
      satk: 65,
      sdef: 65,
      spd: 45,
    },
  },
  {
    id: 4,
    name: 'charmander',
    types: ['fire'],
    weight: 8.5,
    height: 0.6,
    moves: ['Mega-Punch', 'Fire-Punch'],
    description:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    stats: {
      hp: 39,
      atk: 52,
      def: 43,
      satk: 60,
      sdef: 50,
      spd: 65,
    },
  },
  {
    id: 7,
    name: 'squirtle',
    types: ['water'],
    weight: 9.0,
    height: 0.5,
    moves: ['Torrent', 'Rain-Dish'],
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    stats: {
      hp: 44,
      atk: 48,
      def: 65,
      satk: 50,
      sdef: 64,
      spd: 43,
    },
  },
  {
    id: 25,
    name: 'pikachu',
    types: ['electric'],
    weight: 6.0,
    height: 0.4,
    moves: ['Mega-Punch', 'Pay-Day'],
    description:
      'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
    stats: {
      hp: 35,
      atk: 55,
      def: 40,
      satk: 50,
      sdef: 50,
      spd: 90,
    },
  },
]);

function formatNumber(number, length = 3) {
  return number.toString().padStart(length, '0');
}

onMounted(() => {
  const pokemonId = Number(route.params.id);
  chosenPokemon.value = pokemonList.value.find((e) => e.id === pokemonId);
  console.log(chosenPokemon.value);
});
</script>

<template>
  <template v-if="chosenPokemon">
    <PokemonDetailHeader
      :name="chosenPokemon.name"
      :id="chosenPokemon.id"
      :type="chosenPokemon.types[0]"
    />
    <main>
      <div class="container">
        <section class="types">
          <div class="type-container">
            <span
              v-for="(types, index) in chosenPokemon.types"
              :key="index"
              :class="`type-${types}`"
              >{{ types }}</span
            >
          </div>
        </section>
        <section class="about">
          <h4 :style="{ color: `var(--type-${chosenPokemon.types[0]}` }">About</h4>
          <div class="about-container">
            <div class="about-information">
              <div class="about-stats">
                <img src="@/assets/weight.svg" alt="" />
                <span>{{ chosenPokemon.weight }}</span>
              </div>
              <span>Weight</span>
            </div>
            <div class="about-information">
              <div class="about-stats">
                <img src="@/assets/straighten.svg" alt="straighten" />
                <span>{{ chosenPokemon.height }}</span>
              </div>
              <span>Height</span>
            </div>
            <div class="about-information">
              <div class="about-stats">
                <span v-for="(moves, index) in chosenPokemon.moves" :key="index">{{ moves }}</span>
              </div>
              <span>Moves</span>
            </div>
          </div>
          <div class="pokemon-description">
            <p>
              {{ chosenPokemon.description }}
            </p>
          </div>
        </section>
        <section class="base-stats">
          <h4 :style="{ color: `var(--type-${chosenPokemon.types[0]}` }">Base Stats</h4>
          <div class="stats">
            <div class="detail-row" v-for="(stat, statName) in chosenPokemon.stats" :key="statName">
              <span> {{ String(statName).toUpperCase() }} </span>
              <span> {{ formatNumber(stat) }}</span>
              <div
                class="progress"
                :style="{
                  backgroundColor: `color-mix(in srgb, var(--type-${chosenPokemon.types[0]}) 30%, white)`,
                }"
              >
                <div
                  class="progress-bar"
                  :style="{
                    width: `${(stat / 255) * 100}%`,
                    backgroundColor: `var(--type-${chosenPokemon.types[0]})`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </template>
  <template v-else>
    <div class="not-found">
      <h2>Pokémon not found</h2>
      <p>No information available for the requested Pokémon.</p>
      <button @click="router.push({ name: 'Listview' })">Home</button>
    </div>
  </template>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.type-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.type-container span {
  padding: 0.2rem 0.5rem;
  color: #ffffff;
  border-radius: 20px;
}

.types,
.about,
.base-stats {
  padding: 1rem;
  width: 100%;
}
.about {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  height: 120px;
}

.about h4 {
  display: flex;
  justify-content: center;
  color: var(--type-grass);
}

.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.about-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.about-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.about-information img {
  width: 20px;
}

.base-stats {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 180px;
  gap: 0.5rem;
}

.base-stats h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--type-grass);
}

.stats {
  display: flex;
  flex-direction: column;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.detail-row span:first-child {
  width: 5rem;
}
.detail-row span:nth-child(2) {
  width: 4rem;
}
.detail-row span:first-child {
  text-align: right;
}

.progress {
  width: 100%;
  background-color: color-mix(in srgb, var(--type-grass) 30%, white);
  height: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: var(--type-grass);
}

.not-found {
  padding: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-grayscale-white);
  color: var(--color-grayscale-dark);
  text-align: center;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--color-grayscale-light);
}

.type-grass {
  background-color: var(--type-grass);
  color: var(--color-grayscale-white);
}

.type-poison {
  background-color: var(--type-poison);
  color: var(--color-grayscale-white);
}

.type-fire {
  background-color: var(--type-fire);
  color: var(--color-grayscale-white);
}

.type-water {
  background-color: var(--type-water);
  color: var(--color-grayscale-white);
}

.type-electric {
  background-color: var(--type-electric);
  color: var(--color-grayscale-white);
}
</style>
