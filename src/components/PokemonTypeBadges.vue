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

<style scoped>
span {
  padding: 0.2rem 0.5rem;
  color: #ffffff;
  border-radius: 20px;
  text-transform: capitalize;
}

.type-normal {
  background-color: var(--type-normal);
}

.type-fighting {
  background-color: var(--type-fighting);
}

.type-flying {
  background-color: var(--type-flying);
}

.type-poison {
  background-color: var(--type-poison);
}

.type-ground {
  background-color: var(--type-ground);
}

.type-rock {
  background-color: var(--type-rock);
}

.type-bug {
  background-color: var(--type-bug);
}

.type-ghost {
  background-color: var(--type-ghost);
}

.type-steel {
  background-color: var(--type-steel);
}

.type-fire {
  background-color: var(--type-fire);
}

.type-water {
  background-color: var(--type-water);
}

.type-grass {
  background-color: var(--type-grass);
}

.type-electric {
  background-color: var(--type-electric);
}

.type-psychic {
  background-color: var(--type-psychic);
}

.type-ice {
  background-color: var(--type-ice);
}

.type-dragon {
  background-color: var(--type-dragon);
}

.type-dark {
  background-color: var(--type-dark);
}

.type-fairy {
  background-color: var(--type-fairy);
}
</style>
