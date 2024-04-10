import axios from 'axios';

const server = axios.create({
  baseURL: `${process.env.API_URL}/api/v1`,
  timeout: 1200,
});

export default server;
