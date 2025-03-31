<template>
  <n-card class="pokemon-card">
    <div class="pokemon-image">
      <img :src="card.imageUrl" :alt="card.name" />
    </div>
    <div class="pokemon-header">
      <h3>{{ card.name }}</h3>
      <span class="life-points">PV {{ card.lifePoints }}</span>
    </div>
    <n-tag class="pokemon-type" :type="getTypeColor(card.type.name)">
      {{ card.type.name }}
    </n-tag>
    <div class="pokemon-info">
      Taille : {{ card.height }}m | Poids : {{ card.weight }}kg
    </div>
    <div class="pokemon-attack">
      <strong>{{ card.attackName }}</strong>
      <span class="attack-damage">{{ card.attackDamage }} PV</span>
    </div>
  </n-card>
</template>

<script setup>
defineProps(['card']);

const getTypeColor = (type) => {
  const colors = {
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
</script>

<style scoped>
.pokemon-card {
  width: 250px;
  text-align: center;
  padding: 15px;
  border-radius: 10px;
}
</style>
