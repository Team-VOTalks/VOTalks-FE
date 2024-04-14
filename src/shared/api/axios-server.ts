import axios from 'axios';

const server = axios.create({
  baseURL: '/api/v1',
  timeout: 3000,
});

export default server;
