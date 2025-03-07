import axios from 'axios';

const API_URL = 'https://pokemon-api-seyrinian-production.up.railway.app';

export const registerUser = (email: string, password: string) => {
  return axios.post(`${API_URL}/users`, {
    "email" : email,
    "password" : password
  });
};

export const loginUser = (email: string, password: string) => {
  return axios.post(`${API_URL}/users/login`, {
    "email" : email,
    "password" : password
  });
};