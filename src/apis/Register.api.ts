// apis/register.api.ts
import axios from 'axios';

export const registerUser = async (email: string, password: string) => {
    const response = await axios.post('https://pokemon-api-seyrinian-production.up.railway.app/users/', {
        email: email,
        password: password,
    });
    console.log(response.data);
    return response.data;
};