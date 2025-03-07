<template>
  <div class="form-container">
    <n-form @submit.prevent="inscrire">
      <n-form-item label="Username">
        <n-input v-model:value="username" placeholder="Entrez votre nom d'utilisateur" />
      </n-form-item>
      <n-form-item label="Password">
        <n-input v-model:value="password" placeholder="Entrez votre mot de passe" type="password" />
      </n-form-item>
      <n-form-item label="Reenter Password">
        <n-input v-model:value="password2" placeholder="Confirmez votre mot de passe" type="password" />
      </n-form-item>
      <n-form-item>
        <n-button type="primary" native-type="submit">S'inscrire</n-button>
      </n-form-item>
    </n-form>
    <p class="link">Déjà inscrit ? <span @click="$emit('toggleSignin')">Se connecter</span></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerUser } from '../apis/Login.api';
import { useMessage } from 'naive-ui';

const username = ref('');
const password = ref('');
const password2 = ref('');
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