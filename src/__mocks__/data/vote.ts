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
    voteOption: [
      { id: 1, title: '프론트엔드', count: Math.floor(1324 * 0.28), isChecked: false },
      { id: 2, title: '백엔드', count: Math.floor(1324 * 0.72), isChecked: true },
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
    voteOption: [
      {
        id: 1,
        title: '잘하는데 매사에 열심히 안하는 사람',
        count: Math.floor(943 * 0.64),
        isChecked: true,
      },
      {
        id: 2,
        title: '못하는데 열심히 하는 사람 (열심히 못함)',
        count: Math.floor(943 * 0.36),
        isChecked: false,
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
    voteOption: [
      { id: 1, title: '회사 몫이다', count: Math.floor(742 * 0.34), isChecked: false },
      { id: 2, title: '개인 몫이다', count: Math.floor(742 * 0.58), isChecked: false },
      { id: 3, title: '나는 무념무상이다', count: Math.floor(742 * 0.08), isChecked: false },
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
    voteOption: [
      { id: 1, title: '공개', count: Math.floor(834 * 0.42), isChecked: false },
      { id: 2, title: '비공개', count: Math.floor(834 * 0.58), isChecked: false },
    ],
    totalCommentCount: 1563,
  },
  {
    voteId: 5,
    title: '노드, 파이썬 부트캠프 수료 후 추가로 자바/스프링 부트캠프 수료 한다 vs 안한다',
    category: voteCategory.dev,
    createAt: new Date('2024-02-10'),
    totalVoteCount: 658,
    description:
      '요새 취업시장이 안좋은지 제가 아직 많이 부족해서 그런지 모르겠는데 취직이 너무 안돼서 부트캠프 한 번 더 다니려고 하는데 어떨까요..',
    voteOption: [
      { id: 1, title: '한다', count: Math.floor(658 * 0.65), isChecked: true },
      { id: 2, title: '안한다', count: Math.floor(658 * 0.35), isChecked: false },
    ],
    totalCommentCount: 2485,
  },
  {
    voteId: 6,
    title: '클론코딩 도움 된다 vs 안된다',
    category: voteCategory.dev,
    createAt: new Date('2024-02-11'),
    totalVoteCount: 982,
    description: '처음 공부하는거면 이해는 가는데 클론코딩 솔직히 왜함?',
    voteOption: [
      { id: 1, title: '된다', count: Math.floor(982 * 0.13), isChecked: false },
      { id: 2, title: '안된다', count: Math.floor(982 * 0.87), isChecked: true },
    ],
    totalCommentCount: 1644,
  },
  {
    voteId: 7,
    title: '개발자 신입(주니어)만 채용 vs 경력(시니어)만 채용',
    category: voteCategory.dev,
    createAt: new Date('2024-02-10'),
    totalVoteCount: 2543,
    description: null,
    voteOption: [
      { id: 1, title: '신입(주니어)', count: Math.floor(2543 * 0.44), isChecked: false },
      { id: 2, title: '경력(시니어)', count: Math.floor(2543 * 0.56), isChecked: false },
    ],
    totalCommentCount: 5743,
  },
  {
    voteId: 8,
    title: '제이쿼리 레거시 > next.js 로 넘어가는 SI 회사 신입 연봉 2900 취업 한다 vs 안한다',
    category: voteCategory.dev,
    createAt: new Date('2024-02-12'),
    totalVoteCount: 513,
    description: null,
    voteOption: [
      { id: 1, title: '당연히 한다', count: Math.floor(513 * 0.37), isChecked: false },
      { id: 2, title: '그걸 왜하냐', count: Math.floor(513 * 0.63), isChecked: false },
    ],
    totalCommentCount: 2641,
  },
];
