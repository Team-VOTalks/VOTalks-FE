'use client';

type ReturnTypeOfShare = { type: 'clipboard' | 'share' | 'none'; status: boolean };

export default async function share(title: string): Promise<ReturnTypeOfShare> {
  if (!!navigator?.share) {
    await navigator.share({
      title,
      text: '투표에 참여 후 여러분만의 솔직한 의견을 남겨주세요! | 익명 투표 커뮤니티 VOTalks (Vote & Talks)',
      url: location.href,
    });
    return { type: 'share', status: true };
  }
  if (!!navigator?.clipboard) {
    await navigator.clipboard.writeText(location.href);
    return { type: 'clipboard', status: true };
  }
  return { type: 'none', status: false };
}
