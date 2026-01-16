<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const router = useRouter();
</script>

<template>
  <div class="pokemon-container" @click="router.push({ name: 'Detailview', params: { id: id } })">
    <img
      :src="`https://img.pokemondb.net/sprites/home/normal/2x/avif/${name.toLowerCase()}.avif`"
      :alt="`image of ${name}`"
    />
    <p>{{ name }}</p>
  </div>
</template>

<style scoped>
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
  text-transform: capitalize;
}
</style>
