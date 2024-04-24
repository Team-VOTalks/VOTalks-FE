type CommonError = { message?: string; code?: string };

const baseURL = process.env.FE_URL + '/api/v1';

const server = {
  async get<T = any>(path: string): Promise<{ data: T }> {
    const res = await fetch(baseURL + path);

    if (res.status >= 400) {
      const error: CommonError = await res.json();
      throw new Error(error?.message ?? '뭔가 잘못됐어요...');
    }
    return { data: await res.json() };
  },
};

export default server;
