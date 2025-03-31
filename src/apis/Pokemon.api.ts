import axios from 'axios';

export const fetchPokemonCards = async () => {
    try {
        const response = await axios.get(
            'https://pokemon-api-seyrinian-production.up.railway.app/pokemon-cards/'
        );
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des cartes Pokémon :', error);
        return [];
    }
};