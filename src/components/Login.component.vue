<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useLoginStore } from '../stores/Login.store';
import { NForm, NFormItem, NInput, NButton, NText } from 'naive-ui';
import { useRouter } from "vue-router";

const loginStore = useLoginStore();
const { loginData } = storeToRefs(loginStore);
const router = useRouter();

async function submitLogin() {
  try{
    await loginStore.loginState();
    console.log("Réponse de connexion :", loginData); // Debugging

    if (loginData.token != "") {
      localStorage.setItem("token", loginData.token);
      console.error("test");
      await router.push('/deck-builder');
    } else {
      console.error("Réponse inattendue :", loginData);
    }
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
            type="password"
            v-model:value="loginData.password"
            placeholder="Entrez votre mot de passe"
        />
      </n-form-item>

      <n-form-item>
        <n-button type="primary" @click="submitLogin">
          Se connecter
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>
