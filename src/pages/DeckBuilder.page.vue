<template>
  <div class="search-container">
    <n-input v-model:value="searchQuery" placeholder="Rechercher un Pokémon" />
  </div>
  <div class="pokemon-cards-container">
    <PokemonCard v-for="card in filteredPokemonCards" :key="card.id" :card="card" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { NInput } from 'naive-ui';
import { fetchPokemonCards } from '../apis/Pokemon.api.ts';
import PokemonCard from '../components/PokemonCard.component.vue';

const pokemonCards = ref([]);
const searchQuery = ref('');

onMounted(async () => {
  pokemonCards.value = await fetchPokemonCards();
});

const filteredPokemonCards = computed(() => {
  if (!searchQuery.value) return pokemonCards.value;
  return pokemonCards.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.pokemon-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}
</style>
