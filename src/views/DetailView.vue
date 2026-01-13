<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <header>
    <div class="title">
      <img src="@/assets/back-arrow.svg" alt="" @click="router.push({ name: 'Listview' })" />
      <h1>Bulbasaur</h1>
    </div>
    <div class="image">
      <img src="@/assets/bulbasaur.png" alt="" />
    </div>
  </header>
  <main>
    <div class="container">
      <section class="types">
        <div class="type-container">
          <span>Grass</span>
          <span>Poison</span>
        </div>
      </section>
      <section class="about">
        <h4>About</h4>
        <div class="about-container">
          <div class="about-information">
            <div class="about-stats">
              <img src="@/assets/weight.svg" alt="" />
              <span>6.9 kg</span>
            </div>
            <span>Weight</span>
          </div>
          <div class="about-information">
            <div class="about-stats">
              <img src="@/assets/straighten.svg" alt="straighten" />
              <span>0.7m</span>
            </div>
            <span>Height</span>
          </div>
          <div class="about-information">
            <div class="about-stats">
              <span>Overgrow</span>
            </div>
            <span>Moves</span>
          </div>
        </div>
        <p>
          THere is a plant seed on its back right from the day this Pokémon is born. The seed slowly
          grows larger.
        </p>
      </section>
      <section class="base-stats">
        <h4>Base Stats</h4>
        <div class="stats">
          <div class="detail-row">
            <span> HP </span>
            <span> 045 </span>
            <div class="progress">
              <div class="progress-bar" style="width: 45%"></div>
            </div>
          </div>
          <div class="detail-row">
            <span> ATK </span>
            <span> 049 </span>
            <div class="progress">
              <div class="progress-bar" style="width: 49%"></div>
            </div>
          </div>
          <div class="detail-row">
            <span> DEF </span>
            <span> 049 </span>
            <div class="progress">
              <div class="progress-bar" style="width: 49%"></div>
            </div>
          </div>
          <div class="detail-row">
            <span> SATK </span>
            <span> 065 </span>
            <div class="progress">
              <div class="progress-bar" style="width: 65%"></div>
            </div>
          </div>
          <div class="detail-row">
            <span> SDEF </span>
            <span> 065 </span>
            <div class="progress">
              <div class="progress-bar" style="width: 65%"></div>
            </div>
          </div>
          <div class="detail-row">
            <span> SPD </span>
            <span> 045 </span>
            <div class="progress">
              <div class="progress-bar" style="width: 45%"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
header {
  background-color: var(--type-grass);
  height: 220px;
  display: flex;
  flex-direction: column;
  padding: 12px 12px 24px 10px;
  background-image: url('@/assets/pokeball-white.svg');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 200px;
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
  color: var(--color-grayscale-white);
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

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.type-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.type-container span {
  padding: 0.2rem 0.3rem;
  color: #ffffff;
  border-radius: 20px;
}

.type-container span:first-child {
  background-color: var(--type-grass);
}

.type-container span:nth-child(2) {
  background-color: var(--type-poison);
}

.types,
.about,
.base-stats {
  padding: 1rem;
  width: 100%;
}
.about {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  height: 120px;
}

.about h4 {
  display: flex;
  justify-content: center;
  color: var(--type-grass);
}

.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.about-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.about-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.about-information img {
  width: 20px;
}

.base-stats {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 180px;
  gap: 0.5rem;
}

.base-stats h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--type-grass);
}

.stats {
  display: flex;
  flex-direction: column;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.detail-row span:first-child {
  width: 5rem;
}
.detail-row span:nth-child(2) {
  width: 4rem;
}
.detail-row span:first-child {
  text-align: right;
}

.progress {
  width: 100%;
  background-color: color-mix(in srgb, var(--type-grass) 30%, white);
  height: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: var(--type-grass);
}
</style>
