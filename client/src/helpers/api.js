import axios from 'axios';
import { setItemToLocalStorage } from './auth';
import { getPayload } from './auth';

export const getCoffees = async () => {
  const { data } = await axios.get('/api/coffee');
  return data;
};
export const testRoute = async (params) => {
  const { origin, process, profile } = params;
  const { data } = await axios.get(
    `/api/coffee/test?origin=${origin}&process=${process}&profile=${profile}`
  );
  return data;
};

export const postLogin = async (login) => {
  const { data } = await axios.post('/api/login', login);
  setItemToLocalStorage(data.token);
 return data.userToLogin._id
};

export const postRegister = async (register) => {
  await axios.post('/api/register/', register);
};

export const getUserJournal = async (user) => {
  const { sub } = getPayload()
  const { data } = await axios.get(`/api/journal?user=${sub}`);
  return data
}

export const addToJournal = async (coffeeData) => {
  console.log(coffeeData)
  await axios.post('api/journal/', coffeeData)
}