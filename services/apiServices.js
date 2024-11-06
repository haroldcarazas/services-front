import { headers } from 'next/headers';
import { axiosInstance } from './axiosInstace';
import { auth } from '@/auth';

export const getServices = async token => {
  const response = await axiosInstance.get('/services', {
    headers: { authorization: token },
  });
  return response.data;
};

export const createService = async (token, service) => {
  const response = await axiosInstance.post('/services', service, {
    headers: { Authorization: token },
  });
  return response.data;
};
