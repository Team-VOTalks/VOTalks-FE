import { http } from 'msw';

export const voteHandlers = [
  http.get('/api/v1/votes', () => {
    console.log('투표 리스트 요청');
  }),
  http.post('/api/v1/votes', () => {
    console.log('투표 생성 요청');
  }),
  http.get('/api/v1/votes/:id', () => {
    console.log('투표 상세 정보 요청');
  }),
  http.post('/api/v1/votes/:id', () => {
    console.log('투표 행사 요청');
  }),
];
