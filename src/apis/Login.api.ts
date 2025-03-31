  import axios from 'axios';

export const loginUser = async (email: String, password: String) => {
  const response = await axios.post('https://pokemon-api-seyrinian-production.up.railway.app/users/login/', {
    email: email,
    password: password
  })
  console.log(response.data)
  return response.data
}