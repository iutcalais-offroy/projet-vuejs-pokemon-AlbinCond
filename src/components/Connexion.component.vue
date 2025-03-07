<template>
  <div class="form-container">
    <n-form @submit.prevent="connecter">
      <n-form-item label="Username">
        <n-input v-model:value="username" placeholder="Entrez votre nom d'utilisateur" />
      </n-form-item>
      <n-form-item label="Password">
        <n-input v-model:value="password" placeholder="Entrez votre mot de passe" type="password" />
      </n-form-item>
      <n-form-item>
        <n-button type="primary" native-type="submit">Se connecter</n-button>
      </n-form-item>
    </n-form>
    <p class="link">Pas de compte ? <span @click="$emit('toggleSignup')">S'inscrire</span></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginUser } from '../apis/Login.api';
import { useMessage } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { }

const username = ref('');
const password = ref('');
const router = useRouter();
const message = useMessage();
</script>

<style scoped>
.form-container {
  width: 100%;
}
.link {
  text-align: center;
  margin-top: 10px;
  color: black;
}
.link span {
  color: green;
  cursor: pointer;
}
</style>