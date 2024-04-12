import type { Vote } from '@/entities/vote/types';
import * as Shared from '@/shared';

const voteCategory = Shared.constants.COMMUNITY_CATEGORIES;

export const dataVote: Vote[] = [
  {
    voteId: 1,
    title: '프론트엔드 vs 백엔드 뭐가 더 꿀인가',
    category: voteCategory.dev,
    createAt: new Date('2024-02-12'),
    totalVoteCount: 1324,
    description: '이건 닥후 아님? ㅋㅋ (프론트)',
    voteOptionWithCount: [
      { id: 1, title: '백엔드', count: Math.floor(1324 * 0.72) },
      { id: 2, title: '프론트엔드', count: Math.floor(1324 * 0.28) },
    ],
    totalCommentCount: 8763,
  },
  {
    voteId: 2,
    title: '팀원을 고를 때 나는',
    category: voteCategory.dev,
    createAt: new Date('2024-02-08'),
    totalVoteCount: 943,
    description: null,
    voteOptionWithCount: [
      { id: 1, title: '잘하는데 매사에 열심히 안하는 사람', count: Math.floor(943 * 0.64) },
      {
        id: 2,
        title: '못하는데 열심히 하는 사람 (열심히 못함)',
        count: Math.floor(943 * 0.36),
      },
    ],
    totalCommentCount: 9457,
  },
  {
    voteId: 3,
    title: '개발자 성장의 몫은 회사 vs 개인 ??',
    category: voteCategory.dev,
    createAt: new Date('2024-02-09'),
    totalVoteCount: 4031,
    description: null,
    voteOptionWithCount: [
      { id: 1, title: '회사 몫이다', count: Math.floor(742 * 0.34) },
      { id: 2, title: '개인 몫이다', count: Math.floor(742 * 0.58) },
      { id: 3, title: '나는 무념무상이다', count: Math.floor(742 * 0.08) },
    ],
    totalCommentCount: 1905,
  },
  {
    voteId: 4,
    title: '개발자 연봉 공개 vs 비공개',
    category: voteCategory.dev,
    createAt: new Date('2024-02-10'),
    totalVoteCount: 834,
    description: null,
    voteOptionWithCount: [
      { id: 1, title: '공개', count: Math.floor(834 * 0.42) },
      { id: 2, title: '비공개', count: Math.floor(834 * 0.58) },
    ],
    totalCommentCount: 1563,
  },
  {
    voteId: 5,
    title: '노드, 파이썬 부트캠프 수료 후 추가로 자바/스프링 부트캠프 수료 한다 vs 안한다',
    category: voteCategory.dev,
    createAt: new Date('2024-02-10'),
    totalVoteCount: 658,
    description: null,
    voteOptionWithCount: [
      { id: 1, title: '한다', count: Math.floor(658 * 0.65) },
      { id: 2, title: '안한다', count: Math.floor(658 * 0.35) },
    ],
    totalCommentCount: 2485,
  },
];
