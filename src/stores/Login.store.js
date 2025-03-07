import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginUser } from '../apis/Login.api';

export const useLoginStore = defineStore('login', () => {
    const email = ref('');
    const password = ref('');

    const login = async () => {
        try {
            const response = await loginUser(email.value, password.value);
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }       
    }
});

const inscrire = async () => {
    if (password.value !== password2.value) {
      console.error('Les mots de passe ne correspondent pas');
      message.error('Les mots de passe ne correspondent pas');
      return;
    }
    try {
      const response = await registerUser(username.value, password.value);
      console.log('Inscription réussie:', response.data);
      // Afficher un message de succès
      message.success('Inscription réussie ! Veuillez vous connecter.');
      // Logique d'inscription réussie, par exemple, rediriger vers la page de connexion
      router.push('/login');
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      message.error('Erreur lors de l\'inscription');
    }
  };