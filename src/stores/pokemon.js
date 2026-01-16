import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePokemonStore = defineStore('pokemon', () => {
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

  const getPokemonById = (pokemon) => {
    return pokemonList.value.find((e) => e.id === pokemon);
  };
  return { pokemonList, getPokemonById };
});
