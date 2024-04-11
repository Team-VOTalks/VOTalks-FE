'use client';

import axios from 'axios';

const http = axios.create({
  baseURL: '/api/v1',
  timeout: 3000,
});

export default http;
