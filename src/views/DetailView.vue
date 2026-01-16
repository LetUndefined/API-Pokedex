<script setup lang="ts">
import PokemonDetailHeader from '@/components/PokemonDetailHeader.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import PokemonTypeBadges from '@/components/PokemonTypeBadges.vue';
import InfoItem from '@/components/InfoItem.vue';
import StatRow from '@/components/StatRow.vue';
import DetailViewSection from '@/components/DetailViewSection.vue';
import WeightIcon from '@/assets/weight.svg';
import HeightIcon from '@/assets/straighten.svg';
import PokemonNotFound from '@/components/PokemonNotFound.vue';
import { usePokemonStore } from '@/stores/pokemon';

const route = useRoute();
const chosenPokemon = ref(null);
const pokemonStore = usePokemonStore();
const { fetchPokemonById } = pokemonStore;

onMounted(async () => {
  const pokemonId = Number(route.params.id);
  chosenPokemon.value = await fetchPokemonById(pokemonId);
  console.log(chosenPokemon.value);
});
</script>

<template>
  <template v-if="chosenPokemon">
    <div class="container" :style="{ backgroundColor: `var(--type-${chosenPokemon.types[0]}` }">
      <PokemonDetailHeader
        :name="chosenPokemon.name"
        :id="chosenPokemon.id"
        :type="chosenPokemon.types[0]"
      />
      <main>
        <div class="main-container">
          <section class="types-section">
            <PokemonTypeBadges v-for="type in chosenPokemon.types" :key="type" :type="type" />
          </section>

          <DetailViewSection title="About" :color="`var(--type-${chosenPokemon.types[0]})`">
            <section class="info-section">
              <InfoItem
                label="Weight"
                :image-src="WeightIcon"
                image-alt="Weight Icon"
                :text="`${chosenPokemon.weight} kg`"
              />
              <InfoItem
                label="Height"
                :image-src="HeightIcon"
                image-alt="Height Icon"
                :text="`${chosenPokemon.height} m`"
              />
              <InfoItem label="Moves" :values="chosenPokemon.moves" />
            </section>

            <section>
              <p>{{ chosenPokemon.description }}</p>
            </section>
          </DetailViewSection>

          <DetailViewSection title="Base Stats" :color="`var(--type-${chosenPokemon.types[0]})`">
            <section class="stats-detail-section">
              <StatRow
                v-for="(value, stat) in chosenPokemon.stats"
                :key="stat"
                :label="stat.toString()"
                :value="value"
                :color="`var(--type-${chosenPokemon.types[0]})`"
              />
            </section>
          </DetailViewSection>
        </div>
      </main>
    </div>
  </template>
  <template v-else>
    <PokemonNotFound />
  </template>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  gap: 1rem;
  border-radius: 8px;
  padding: 1rem;
}

.container {
  padding: 0.25rem;
}

.types-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
}

.info-section {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  gap: 1rem;
  padding-bottom: 0.5rem;
}

.info-section + section p {
  font-size: 12px;
}

.stats-detail-section {
  display: flex;
  flex-direction: column;
}
</style>
