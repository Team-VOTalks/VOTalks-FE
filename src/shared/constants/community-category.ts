export const COMMUNITY_CATEGORIES = Object.freeze({
  date: '연애',
  daily: '일상',
  company: '회사',
  dev: '개발',
  friend: '친구',
  family: '가족',
});

export type CommunityCategory = keyof typeof COMMUNITY_CATEGORIES;
