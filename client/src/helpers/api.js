import axios from 'axios';
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

export const postRegister = async (register) => {
  await axios.post('/api/register/', register);
};
