import { defineStore } from 'pinia';
import { ref } from 'vue';
import { registerUser } from '../apis/register.api';

export const useRegisterStore = defineStore('register', () => {
    const registerData = ref({
        email: '',
        password: '',
        password2: '',
    });

    const errors = ref([]); // Assurez-vous que cette ligne est bien présente ET correcte.

    const registerState = async () => {
        try {
            errors.value = []; // Réinitialiser les erreurs

            if (registerData.value.password !== registerData.value.password2) {
                errors.value.push("Le mot de passe et la confirmation ne correspondent pas.");
                throw new Error("Validation des mots de passe échouée.");
            }

            await registerUser(registerData.value.email, registerData.value.password);
            console.log("Inscription réussie :", registerData.value);
        } catch (error) {
            console.error("Erreur lors de l'inscription : ", error);
            if (!errors.value.length) {
                errors.value.push("Une erreur est survenue lors de l'inscription.");
            }
        }
    };

    return {
        registerData,
        errors, // Retournez `errors` ici pour qu'il soit disponible dans le composant
        registerState,
    };
});