import { type HttpHandler, HttpResponse, http, delay } from 'msw';

const baseURL = process.env.API_URL;

export const handlers: HttpHandler[] = [
  http.get(`${baseURL}/api/v1/votes`, async () => {
    await delay(1200);
    return HttpResponse.json({ message: '5000' });
  }),
];
