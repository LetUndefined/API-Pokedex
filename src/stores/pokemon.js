import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonList = ref([]);
  const isLoading = ref(true);
  const inputValue = ref('');

  const fetchPokemonList = async () => {
    try {
      isLoading.value = true;
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();

      const list = data.results;

      pokemonList.value = list.map((pokemon) => {
        const splittedUrl = pokemon.url.split('/');
        const id = Number(splittedUrl[splittedUrl.length - 2]);

        return {
          id,
          name: pokemon.name,
        };
      });
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  function getRandomItems(items, amount = 1) {
    const randomItems = [...items].sort(() => 0.5 - Math.random()).slice(0, amount);
    return randomItems;
  }

  function fixWords(moves) {
    return moves.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  }

  function getRandomMoves(moves, amount = 2) {
    const randomMoves = [...moves].sort(() => 0.5 - Math.random()).slice(0, amount);
    const names = randomMoves.map((item) => fixWords(item.move.name));
    return names;
  }

  function getDescriptions(options) {
    const filteredDescr = options.filter((e) => e.language.name === 'en');
    const randomValue = getRandomItems(filteredDescr);
    return randomValue[0].flavor_text;
  }

  const filterPokemon = computed(() => {
    return pokemonList.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.value.toLowerCase()),
    );
  });

  const fetchPokemonById = async (id) => {
    isLoading.value = true;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const pokemonSpeciesResponse = await fetch(data.species.url);
    const pokemonSpeciesData = await pokemonSpeciesResponse.json();
    const description = getDescriptions(pokemonSpeciesData.flavor_text_entries);

    const pokemon = {
      id: data.id,
      name: data.name,
      types: data.types.map((item) => item.type.name),
      weight: data.weight / 10,
      height: data.height / 10,
      moves: getRandomMoves(data.moves),
      description: description,
      stats: {
        hp: data.stats.find((item) => item.stat.name === 'hp').base_stat,
        atk: data.stats.find((item) => item.stat.name === 'attack').base_stat,
        def: data.stats.find((item) => item.stat.name === 'defense').base_stat,
        satk: data.stats.find((item) => item.stat.name === 'special-attack').base_stat,
        sdef: data.stats.find((item) => item.stat.name === 'special-defense').base_stat,
        spd: data.stats.find((item) => item.stat.name === 'speed').base_stat,
      },
    };
    isLoading.value = false;
    return pokemon;
  };

  return {
    pokemonList,
    fetchPokemonById,
    fetchPokemonList,
    fixWords,
    isLoading,
    inputValue,
    filterPokemon,
  };
});
