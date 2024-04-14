'use client';

import axios from 'axios';

const client = axios.create({
  baseURL: '/api/v1',
  timeout: 3000,
});

export default client;
