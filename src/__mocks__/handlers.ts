import type { HttpHandler, HttpResponseResolver } from 'msw';
import { HttpResponse, http, delay } from 'msw';
import * as DB from './data';
import * as Shared from '@/shared';

const delayMS = 1200;
const baseURL = process.env.API_URL + '/api/v1';

const get = (path: string, resolver: HttpResponseResolver) =>
  http.get(baseURL + path, async info => {
    console.log(`[MSW]: ${info.request.method} ${info.request.url} ✅`);
    await delay(delayMS);
    return resolver(info);
  });

const post = (path: string, resolver: HttpResponseResolver) =>
  http.post(baseURL + path, async info => {
    const body = await info.request.json();
    console.log(`[MSW]: ${info.request.method} ${info.request.url} ✅`);
    console.log(' ﾤ ' + JSON.stringify(body));
    await delay(delayMS);
    return resolver(info);
  });

const error = (message: string, status: number) =>
  HttpResponse.json({ message: `[MSW]: ${message}` }, { status });

const getParams = (url: string) => new URL(url).searchParams;

const categories = Shared.constants.COMMUNITY_CATEGORIES;
type Category = Shared.constants.CommunityCategory;

export const handlers: HttpHandler[] = [
  get('/votes', ({ request }) => {
    // 투표 전체 조회
    const queryParams = getParams(request.url);
    const categoryParam = queryParams.get('category');
    const pageIndex = Number(queryParams.get('page')) || 1;

    if (isNaN(pageIndex)) {
      return error('유효하지 않은 요청입니다', 400);
    }
    if (!!categoryParam) {
      const currentCategory = categories[categoryParam as Category];
      return HttpResponse.json({
        content: DB.vote.filter(({ category }) => category === currentCategory),
        pageInfo: { pageIndex, totalPageLength: 1, done: true },
      });
    }
    return HttpResponse.json({
      content: DB.vote,
      pageInfo: { pageIndex, totalPageLength: 3, done: pageIndex === 3 },
    });
  }),
  post('/votes', () => {
    // 투표 생성
    return HttpResponse.json(null, { status: 201 });
  }),
  get('/votes/:voteId', ({ params }) => {
    // 투표 상세 조회
    const voteId = Number(params.voteId);

    if (isNaN(voteId)) {
      return error('유효하지 않은 요청입니다', 400);
    }
    if (voteId <= 0 || voteId > DB.vote.length) {
      return error('투표를 찾을 수 없습니다', 404);
    }
    return HttpResponse.json(DB.vote[voteId - 1]);
  }),
  post('/votes/:voteId', ({ params }) => {
    // 투표
    const voteId = Number(params.voteId);

    if (isNaN(voteId)) {
      return error('유효하지 않은 요청입니다', 400);
    }
    return HttpResponse.json(null, { status: 201 });
  }),
  get('/votes/:voteId/comments', ({ params, request }) => {
    // 댓글 조회
    const voteId = Number(params.voteId);
    const queryParams = getParams(request.url);
    const pageIndex = Number(queryParams.get('page')) || 1;

    if (isNaN(voteId)) {
      return error('유효하지 않은 요청입니다', 400);
    }
    if (voteId <= 0 || voteId > DB.vote.length) {
      return error('투표를 찾을 수 없습니다', 404);
    }
    return HttpResponse.json({
      content: DB.comment,
      pageInfo: { pageIndex, totalPageLength: 5, done: pageIndex === 5 },
    });
  }),
  post('/votes/:voteId/comments', ({ params }) => {
    // 댓글 생성
    const voteId = Number(params.voteId);

    if (isNaN(voteId)) {
      return error('유효하지 않은 요청입니다', 400);
    }
    if (voteId <= 0 || voteId > DB.vote.length) {
      return error('투표를 찾을 수 없습니다', 404);
    }
    return HttpResponse.json(null, { status: 201 });
  }),
  post('/votes/:voteId/comments/:commentId', ({ params }) => {
    // 대댓글 생성
    const voteId = Number(params.voteId);
    const commentId = Number(params.commentId);

    if (isNaN(voteId) || isNaN(commentId)) {
      return error('유효하지 않은 요청입니다', 400);
    }
    if (voteId <= 0 || voteId > DB.vote.length) {
      return error('투표를 찾을 수 없습니다', 404);
    }
    if (commentId <= 0 || commentId > DB.comment.length) {
      return error('댓글을 찾을 수 없습니다', 404);
    }
    return HttpResponse.json(null, { status: 201 });
  }),
  get('/votes/:voteId/comments/:commentId/replies', ({ params, request }) => {
    // 대댓글 조회
    const voteId = Number(params.voteId);
    const commentId = Number(params.commentId);
    const queryParams = getParams(request.url);
    const pageIndex = Number(queryParams.get('page')) || 1;

    if (isNaN(voteId) || isNaN(commentId)) {
      return error('유효하지 않은 요청입니다', 400);
    }
    if (voteId <= 0 || voteId > DB.vote.length) {
      return error('투표를 찾을 수 없습니다', 404);
    }
    if (commentId <= 0 || commentId > DB.comment.length) {
      return error('댓글을 찾을 수 없습니다', 404);
    }
    return HttpResponse.json({
      content: DB.reply,
      pageInfo: { pageIndex, totalPageLength: 5, done: pageIndex === 5 },
    });
  }),
];
