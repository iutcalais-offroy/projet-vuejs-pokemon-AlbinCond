<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useLoginStore } from '../stores/Login.store.js';
import { NForm, NFormItem, NInput, NButton, NText } from 'naive-ui'

const loginStore = useLoginStore();
const { loginData } = storeToRefs(loginStore);

async function submitLogin() {
  try {
    await loginStore.loginState();
    console.log("Connexion réussie :", loginData.value);
  } catch (error) {
    console.error("Échec de la connexion :", error);
  }
}
</script>

<template>
  <div>
    <n-form :model="loginData" label-placement="top">

      <!-- Adresse mail -->
      <n-form-item label="Email">
        <n-input
            v-model:value="loginData.email"
            placeholder="Entrez votre email"
        />
      </n-form-item>

      <!-- Mot de passe -->
      <n-form-item label="Mot de passe">
        <n-input
            v-model:value="loginData.password"
            placeholder="Entrez votre mot de passe"
        />
      </n-form-item>

      <n-form-item>
        <n-button type="primary" @click="submitLogin">
          Se connecter
        </n-button>
      </n-form-item>

      <n-form-item>
        <n-text>
          Pas de compte ? <a href="/register">S'inscrire</a>
        </n-text>
      </n-form-item>
    </n-form>
  </div>
</template>