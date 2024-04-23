const baseURL = process.env.FE_URL + '/api/v1';

const server = {
  async get<T = any>(path: string) {
    const res = await fetch(baseURL + path);
    const data: T = await res.json();
    return { data };
  },
};

export default server;
