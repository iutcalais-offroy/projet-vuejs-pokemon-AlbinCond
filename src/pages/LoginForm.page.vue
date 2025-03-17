<template>
  <n-card>
    <n-tabs
      class="card-tabs"
      v-model:value="activeTab"
      size="large"
      animated
      pane-wrapper-style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="connexion" tab="Connexion">
        <LoginComponent @toggleSignup="activeTab = 'signup'" />
      </n-tab-pane>
      <n-tab-pane name="inscription" tab="Inscription">
        <InscriptionComponent @toggleSignin="activeTab = 'signin'" />
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from '../components/Login.component.vue';
import InscriptionComponent from '../components/Inscription.component.vue';

const activeTab = ref('signin');
</script>

<style scoped>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
</style>