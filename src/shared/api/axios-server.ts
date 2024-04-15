import axios from 'axios';

const server = axios.create({
  baseURL: `${process.env.FE_URL}/api/v1`,
  timeout: 3000,
});

export default server;
