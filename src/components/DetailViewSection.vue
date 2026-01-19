<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'gray',
  },
});
</script>

<template>
  <section class="detail-view-section">
    <section>
      <h2 :style="{ color }">{{ title }}</h2>
    </section>

    <slot></slot>
  </section>
</template>

<style scoped>
.detail-view-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2 {
  font-size: 1.25rem;
  text-align: center;
}
</style>
