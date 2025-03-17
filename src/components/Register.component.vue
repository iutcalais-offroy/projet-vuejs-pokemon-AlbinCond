<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useRegisterStore } from '../stores/register.store';
import { NForm, NFormItem, NInput, NButton, NText } from 'naive-ui';

const registerStore = useRegisterStore();
const { registerData, errors } = storeToRefs(registerStore);

async function submitRegister() {
  try {
    await registerStore.registerState();
    if (errors.value.length === 0) {
      console.log("Rediriger vers la page de connexion après inscription réussie.");
      // Redirection possible, par exemple : this.$router.push('/login');
    }
  } catch (error) {
    console.error("Échec de l'inscription :", error);
  }
}
</script>

<template>
  <div>
    <n-form :model="registerData" label-placement="top">

      <!-- Adresse mail -->
      <n-form-item label="Email">
        <n-input
            v-model:value="registerData.email"
            placeholder="Entrez votre email"
        />
      </n-form-item>

      <!-- Mot de passe -->
      <n-form-item label="Mot de passe">
        <n-input
            type="password"
            v-model:value="registerData.password"
            placeholder="Entrez votre mot de passe"
        />
      </n-form-item>

      <!-- Confirmation du mot de passe -->
      <n-form-item label="Confirmer le mot de passe">
        <n-input
            type="password"
            v-model:value="registerData.password2"
            placeholder="Confirmez votre mot de passe"
        />
      </n-form-item>

      <!-- Bouton S'inscrire -->
      <n-form-item>
        <n-button type="primary" @click="submitRegister">
          S'inscrire
        </n-button>
      </n-form-item>

      <!-- Affichage des erreurs -->
      <div v-if="errors.length > 0">
        <p v-for="(err, index) in errors" :key="index" style="color: red;">{{ err }}</p>
      </div>

      <n-form-item>
      </n-form-item>
    </n-form>
  </div>
</template>