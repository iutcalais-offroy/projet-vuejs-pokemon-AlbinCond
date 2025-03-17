<script lang="ts" setup>
import { ref } from 'vue';
import { NForm, NFormItem, NInput, NButton } from 'naive-ui'
import {storeToRefs} from "pinia";

const loginData = ref({
  email: '',
  password: ''
})
const RegisterStore = useRegisterStore();
const { loginData } = storeToRefs(RegisterStore);

function submitLogin() {
  console.log("Connexion avec :", loginData.value)
}
</script>

<template>
  <div>
    <n-form :model="loginData" label-placement="top">

      <n-form-item label="Email">
        <n-input
            v-model:value="loginData.email"
            placeholder="Entrez votre email"
        />
      </n-form-item>

      <n-form-item label="Mot de passe">
        <n-input
            type="password"
            v-model:value="loginData.password"
            placeholder="Entrez votre mot de passe"
        />
      </n-form-item>

      <n-form-item label="Confirmer le mot de passe">
        <n-input
        type="password"
        v-model:value="loginData.password2"
        placeholder="Confirmer votre mot de passe"
        />
      </n-form-item>

      <n-form-item>
        <n-button type="primary" @click="submitLogin">
          S'inscrire
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>