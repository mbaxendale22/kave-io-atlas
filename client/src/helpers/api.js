import axios from 'axios';
import { getPayload } from './auth';

export const getCoffees = async () => {
  const { data } = await axios.get('/api/coffee');
  return data;
};
export const testRoute = async (params) => {
  const { region, process, profile } = params;
  const { data } = await axios.get(
    `/api/coffee/test?region=${region}&process=${process}&profile=${profile}`
  );
  return data;
};
