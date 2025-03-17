import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginUser } from '../apis/Login.api.js';

export const useLoginStore = defineStore('login', () => {
    const loginData = ref({
        email: '',
        password: ''
    });

    const loginState = async () => {
        try {
            await loginUser(loginData.value.email, loginData.value.password);
            console.log("Connexion réussie :", loginData.value);
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };

    return { loginData, loginState };
});