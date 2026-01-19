<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => {
      const validTypes = [
        'normal',
        'fighting',
        'flying',
        'poison',
        'ground',
        'rock',
        'bug',
        'ghost',
        'steel',
        'fire',
        'water',
        'grass',
        'electric',
        'psychic',
        'ice',
        'dragon',
        'dark',
        'fairy',
      ];
      return validTypes.includes(value.toString());
    },
  },
});
</script>

<template>
  <span class="type" :class="`type-${type}`"> {{ type }} </span>
</template>

<style scoped lang="scss">
span {
  padding: 0.2rem 0.5rem;
  color: #ffffff;
  border-radius: 20px;
  text-transform: capitalize;
}

$type-colors: (
  normal: var(--type-normal),
  fighting: var(--type-fighting),
  flying: var(--type-flying),
  poison: var(--type-poison),
  ground: var(--type-ground),
  rock: var(--type-rock),
  bug: var(--type-bug),
  ghost: var(--type-ghost),
  steel: var(--type-steel),
  fire: var(--type-fire),
  water: var(--type-water),
  grass: var(--type-grass),
  electric: var(--type-electric),
  psychic: var(--type-psychic),
  ice: var(--type-ice),
  dragon: var(--type-dragon),
  dark: var(--type-dark),
  fairy: var(--type-fairy),
);

.type {
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  color: var(--color-grayscale-white);

  @each $type, $color in $type-colors {
    &-#{$type} {
      background-color: $color;
    }
  }
}
</style>
