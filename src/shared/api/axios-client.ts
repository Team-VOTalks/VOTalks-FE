'use client';

import axios from 'axios';

const client = axios.create({
  baseURL: '/api/v1',
  timeout: 2400,
  headers: {
    'VOTalks-Authorization': typeof window !== 'undefined' ? localStorage.getItem('_userId') : null,
  },
});

client.interceptors.response.use(res => {
  if (typeof window !== 'undefined' && typeof res.data?.uuid !== 'undefined') {
    localStorage.setItem('_userId', res.data.uuid);
  }
  return res;
});

export default client;
