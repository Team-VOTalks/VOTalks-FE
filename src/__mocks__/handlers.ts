import type { HttpHandler, StrictRequest, DefaultBodyType } from 'msw';
import { HttpResponse, http, delay } from 'msw';
import { dataVote } from './data/vote';
import { dataComment } from './data/comment';

const baseURL = process.env.API_URL + '/api/v1';

const initHandler = async (req: StrictRequest<DefaultBodyType>) => {
  console.log(`[MSW]: ${req.method} ${req.url} ✅`);
  await delay(1200);
};

const getParams = (url: string) => new URL(url).searchParams;

export const handlers: HttpHandler[] = [
  http.get(`${baseURL}/votes`, async ({ request }) => {
    // 투표 전체 조회
    await initHandler(request);
    // const params = getParams(request.url);
    return HttpResponse.json({ content: dataVote });
  }),
  http.post(`${baseURL}/votes`, async ({ request }) => {
    // 투표 생성
    await initHandler(request);
    // return HttpResponse.json({ message: '고의적인 에러입니다' }, { status: 500 });
    return HttpResponse.json(null, { status: 201 });
  }),
  http.get(`${baseURL}/votes/:id`, async ({ params, request }) => {
    // 투표 상세 조회
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
  http.post(`${baseURL}/votes/:id`, async ({ request }) => {
    // 투표
    await initHandler(request);
    return HttpResponse.json(null, { status: 201 });
  }),
  http.get(`${baseURL}/votes/:id/comments`, async ({ params, request }) => {
    // 댓글 전체 조회
    await initHandler(request);
    const voteId = Number(params.id);

    if (isNaN(voteId)) {
      return HttpResponse.json({ message: '유효하지 않은 요청입니다' }, { status: 400 });
    }
    if (voteId <= 0 || voteId > dataVote.length) {
      return HttpResponse.json({ message: '투표를 찾을 수 없습니다' }, { status: 404 });
    }
    return HttpResponse.json({ content: dataComment });
  }),
  http.post(`${baseURL}/votes/:id/comments`, async ({ request }) => {
    // 댓글 생성
    await initHandler(request);
    return HttpResponse.json(null, { status: 201 });
  }),
];
