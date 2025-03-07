<template>
  <div class="container">
    <n-tabs v-model:value="isSignup" type="line">
      <n-tab-pane name="true" tab="Connexion">
        <div class="form-container">
          <n-form @submit.prevent="connecter">
            <n-form-item label="Email">
              <n-input v-model:value="email" placeholder="Entrez votre email" type="email" />
            </n-form-item>
            <n-form-item label="Mot de passe">
              <n-input v-model:value="password" placeholder="Entrez votre mot de passe" type="password" />
            </n-form-item>
            <n-form-item>
              <n-button type="primary" native-type="submit">Se connecter</n-button>
            </n-form-item>
          </n-form>
          <p class="link">Pas de compte ? <span @click="isSignup = false">S'inscrire</span></p>
        </div>
      </n-tab-pane>
      <n-tab-pane name="false" tab="Inscription">
        <div class="form-container">
          <n-form @submit.prevent="inscrire">
            <n-form-item label="Email">
              <n-input v-model:value="email" placeholder="Entrez votre email" type="email" />
            </n-form-item>
            <n-form-item label="Mot de passe">
              <n-input v-model:value="password" placeholder="Entrez votre mot de passe" type="password" />
            </n-form-item>
            <n-form-item label="Confirmer le mot de passe">
              <n-input v-model:value="password2" placeholder="Confirmez votre mot de passe" type="password" />
            </n-form-item>
            <n-form-item>
              <n-button type="primary" native-type="submit">S'inscrire</n-button>
            </n-form-item>
          </n-form>
          <p class="link">Déjà inscrit ? <span @click="isSignup = true">Se connecter</span></p>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NForm, NFormItem, NInput, NButton, NTabs, NTabPane } from 'naive-ui';

const isSignup = ref(true);
const email = ref('');
const password = ref('');
const password2 = ref('');
const router = useRouter();

const connecter = () => {
  console.log('Connexion avec', email.value, password.value);
  // Logique de connexion
  router.push('/deckbuilder');
};

const inscrire = () => {
  console.log('Inscription avec', email.value, password.value, password2.value);
  // Logique d'inscription
  router.push('/login');
};
</script>

<style scoped>
.container {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
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