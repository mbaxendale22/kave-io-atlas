import axios from 'axios';
import { getPayload } from './auth';

export const getCoffees = async () => {
  const { data } = await axios.get('/api/coffee');
  return data;
};
