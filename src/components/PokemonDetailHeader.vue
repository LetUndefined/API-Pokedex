<script setup lang="ts">
import { useRouter } from 'vue-router';
import { formatNumber } from '@/utils/formatting';

const router = useRouter();

defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header :style="{ backgroundColor: `var(--type-${type})` }">
    <div class="header-row-item">
      <div class="title">
        <img src="@/assets/back-arrow.svg" alt="" @click="router.push({ name: 'Listview' })" />
        <h1>{{ name }}</h1>
      </div>
      <span>#{{ formatNumber(id) }}</span>
    </div>
    <div class="image">
      <img :src="`/public/${name}.png`" alt="" />
    </div>
  </header>
</template>

<style scoped>
header {
  height: 220px;
  display: flex;
  flex-direction: column;
  padding: 12px 12px 24px 10px;
  background-image: url('@/assets/pokeball-light.svg');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 200px;
  text-transform: capitalize;
}

.header-row-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-grayscale-white);
  font-weight: bold;
}

.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}

.title h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
}

.title img {
  width: 20px;
  margin-left: 0.25rem;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img {
  max-width: 225px;
  max-height: 225px;
}
</style>
