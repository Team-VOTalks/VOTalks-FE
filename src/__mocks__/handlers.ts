import type { HttpHandler, StrictRequest, DefaultBodyType } from 'msw';
import { HttpResponse, http, delay } from 'msw';
import { dataVote } from './data/vote';

const baseURL = process.env.API_URL + '/api/v1';

const initHandler = async (req: StrictRequest<DefaultBodyType>) => {
  console.log(`[msw]: ${req.method} ${req.url} ✅`);
  await delay(1200);
};

const getParams = (url: string) => new URL(url).searchParams;

export const handlers: HttpHandler[] = [
  http.get(`${baseURL}/votes`, async ({ request }) => {
    await initHandler(request);
    const params = getParams(request.url);
    console.log(params);
    return HttpResponse.json({ content: dataVote });
  }),
  http.post(`${baseURL}/votes`, async ({ request }) => {
    await initHandler(request);
    console.log(request.body);
    return HttpResponse.json(null, { status: 201 });
  }),
  http.get(`${baseURL}/votes/:id`, async ({ params, request }) => {
    await initHandler(request);
    const voteId = Number(params.id);

    if (isNaN(voteId)) {
      return HttpResponse.json({ message: '유효하지 않은 요청입니다' }, { status: 400 });
    }
    if (voteId <= 0 || voteId > dataVote.length) {
      return HttpResponse.json({ message: '투표를 찾을 수 없습니다' }, { status: 404 });
    }
    return HttpResponse.json(dataVote[voteId - 1]);
  }),
];
