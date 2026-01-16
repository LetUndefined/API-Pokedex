<script setup lang="ts">
  import { formatNumber } from '@/utils/formatting';

  defineProps({
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
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
  <div class="detail-row">
    <span :style="{ color }"> {{ String(label).toUpperCase() }} </span>
    <span>{{ formatNumber(value) }}</span>
    <div
      class="progress"
      :style="{
        backgroundColor: `color-mix(in srgb, ${color} 30%, white)`,
      }"
    >
      <div
        class="progress-bar"
        :style="{
          width: `${(value / 255) * 100}%`,
          backgroundColor: `${color}`,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
  .detail-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .detail-row span:first-child {
    width: 3rem;
  }
  .detail-row span:nth-child(2) {
    width: 2rem;
  }
  .detail-row span:first-child {
    text-align: right;
  }

  .progress {
    width: 100%;
    height: 0.5rem;
    border-radius: 1rem;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
  }
</style>
