<script setup>
import { ref } from "vue";
import LoginFormComponent from "../components/Login.component.vue";
import RegisterComponent from "../components/Register.component.vue";
import { NTabs, NTabPane, NCard, NText } from "naive-ui";

const activeTab = ref("login");

const changeTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <div class="tabs-form">
    <n-card>
      <n-tabs v-model:value="activeTab" type="line" animated>

        <n-tab-pane name="login" tab="Connexion">
          <LoginFormComponent/>
        </n-tab-pane>

        <n-tab-pane name="register" tab="Inscription">
          <RegisterComponent/>
        </n-tab-pane>

      </n-tabs>
    </n-card>
  </div>
</template>

<style scoped>
.tabs-form{
  width: 100%;
  text-decoration: solid;
}
</style>