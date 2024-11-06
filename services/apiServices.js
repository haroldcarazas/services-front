import { headers } from 'next/headers';
import { axiosInstance } from './axiosInstace';
import { auth } from '@/auth';

export const getServices = async token => {
  const response = await axiosInstance.get('/services', {
    headers: { authorization: token },
  });
  return response.data;
};
