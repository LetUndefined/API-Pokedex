<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="not-found">
    <h2>Pokémon not found</h2>
    <p>No information available for the requested Pokémon.</p>
    <button @click="router.push({ name: 'Listview' })">Home</button>
  </div>
</template>

<style scoped>
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
</style>
