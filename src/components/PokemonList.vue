<script setup lang="ts"></script>
<template>
  <div class="pokemon-list">
    <slot></slot>
  </div>
</template>

<style scoped>
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  gap: 0.5rem;
}
</style>
