<script setup>
import { ref } from "vue";
import LoginFormComponent from "../components/Login.component.vue";
import RegisterComponent from "../components/Register.component.vue";
import { NTabs, NTabPane, NCard, NText } from "naive-ui";

// Valeur de départ de l'onglet actif
const activeTab = ref("login");

// Fonction pour changer d'onglet
const changeTab = (tab) => {
  activeTab.value = tab; // Attribuer simplement la valeur de l'onglet souhaité
};
</script>

<template>
  <div class="tabs-form">
    <n-card>
      <!-- Onglets -->
      <n-tabs v-model:value="activeTab" type="line" animated>

        <!-- Onglet Connexion -->
        <n-tab-pane name="login" tab="Connexion">
          <LoginFormComponent/>
          <n-text>
            Pas de compte ? <a href="#" @click="changeTab('register')">S'inscrire</a>
          </n-text>
        </n-tab-pane>

        <!-- Onglet Inscription -->
        <n-tab-pane name="register" tab="Inscription">
          <RegisterComponent/>
          <n-text>
            Déjà un compte ? <a href="#" @click="changeTab('login')">Se connecter</a>
          </n-text>
        </n-tab-pane>

      </n-tabs>
    </n-card>
  </div>
</template>

<style scoped>
.tabs-form {
  width: 100%;
  text-decoration: solid;
}
</style>