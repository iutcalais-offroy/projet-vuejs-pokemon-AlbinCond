<template>
  <div class="search-container">
    <n-input v-model:value="searchQuery" placeholder="Rechercher un Pokémon" />
  </div>

  <div class="pokemon-cards-container">
    <n-card v-for="card in filteredPokemonCards" :key="card.id" class="pokemon-card">
      <!-- Image du Pokémon -->
      <div class="pokemon-image">
        <img :src="card.imageUrl" :alt="card.name" />
      </div>

      <!-- Nom et PV -->
      <div class="pokemon-header">
        <h3>{{ card.name }}</h3>
        <span class="life-points">PV {{ card.lifePoints }}</span>
      </div>

      <!-- Type -->
      <n-tag class="pokemon-type" :type="getTypeColor(card.type.name)">
        {{ card.type.name }}
      </n-tag>

      <!-- Taille et Poids -->
      <div class="pokemon-info">
        Taille : {{ card.height }}m | Poids : {{ card.weight }}kg
      </div>

      <!-- Attaque principale -->
      <div class="pokemon-attack">
        <strong>{{ card.attackName }}</strong>
        <span class="attack-damage">{{ card.attackDamage }} PV</span>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { NCard, NTag, NInput } from 'naive-ui';
import axios from 'axios';

export default defineComponent({
  name: 'PokemonCards',
  components: {
    NCard,
    NTag,
    NInput,
  },
  setup() {
    const pokemonCards = ref<any[]>([]);
    const searchQuery = ref<string>(''); // Stocke le texte de recherche

    const fetchPokemonCards = async () => {
      try {
        const response = await axios.get(
            'https://pokemon-api-seyrinian-production.up.railway.app/pokemon-cards/'
        );
        pokemonCards.value = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des cartes Pokémon :', error);
      }
    };

    // Filtrer les Pokémon en fonction de la recherche
    const filteredPokemonCards = computed(() => {
      if (!searchQuery.value) {
        return pokemonCards.value; // Si pas de recherche, affiche tout
      }
      return pokemonCards.value.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const getTypeColor = (type: string) => {
      const colors: Record<string, string> = {
        Grass: 'success',
        Fire: 'error',
        Water: 'primary',
        Electric: 'warning',
        Psychic: 'info',
        Rock: 'default',
        Ground: 'default',
      };
      return colors[type] || 'default';
    };

    onMounted(fetchPokemonCards);

    return {
      pokemonCards,
      searchQuery,
      filteredPokemonCards,
      getTypeColor,
    };
  },
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

.pokemon-card {
  width: 250px;
  text-align: center;
  padding: 15px;
  border-radius: 10px;
}

.pokemon-image img {
  max-width: 100%;
  height: 120px;
  object-fit: contain;
  margin-bottom: 10px;
}

.pokemon-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}

.life-points {
  font-weight: bold;
  color: red;
}

.pokemon-type {
  display: inline-block;
  font-size: 14px;
  padding: 4px 10px;
  margin-top: 5px;
}

.pokemon-info {
  margin-top: 10px;
  font-size: 14px;
  color: gray;
}

.pokemon-attack {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

.attack-damage {
  color: red;
  margin-left: 10px;
}
</style>
