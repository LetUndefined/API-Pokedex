<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: false,
  },
  imageAlt: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  values: {
    type: Array,
    required: false,
  },
});
</script>

<template>
  <section>
    <div
      class="info-data"
      :class="{
        'list-data': values && values.length,
      }"
    >
      <template v-if="imageSrc || text">
        <img :src="imageSrc" :alt="imageAlt" />
        {{ text }}
      </template>
      <template v-else-if="values && values.length">
        <div v-for="(value, index) in values" :key="index">{{ value }}</div>
      </template>
    </div>
    <div class="info-label">{{ label }}</div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
}

.info-data {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  flex: 1 1 auto;
}

.info-data img {
  width: 20px;
}

.info-label {
  font-size: 0.875rem;
  color: var(--color-grayscale-medium);
}

.list-data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  font-size: 14px;
}
</style>
