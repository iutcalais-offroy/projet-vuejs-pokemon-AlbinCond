import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginUser } from '../apis/Login.api.js';

export const useLoginStore = defineStore('login', () => {
    const loginData = ref({
        email: '',
        password: '',
        id: '',
        token:''
    });

    const loginState = async () => {
        try {
            const user = await loginUser(loginData.value.email, loginData.value.password);
            loginData.value.id = user.id;
            loginData.value.token = user.token;
            console.log("Connexion réussie :", loginData.value);
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };

    return { loginData, loginState };
});