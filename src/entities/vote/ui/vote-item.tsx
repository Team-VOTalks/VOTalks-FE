import Link from 'next/link';
import type { Vote } from '../types';
import share from '../lib/share';
import * as Shared from '@/shared';

export default function VoteItem({ data, type }: { data: Vote; type: 'list' | 'detail' }) {
  return (
    <>
      <p className="mb-2 flex items-center justify-start gap-2 text-sm">
        <span className="inline-block rounded bg-blue-100 px-3 py-1 text-blue-500">
          {data.category}
        </span>
        <span className="text-gray-500">
          {new Intl.DateTimeFormat().format(new Date(data.createAt))}
        </span>
      </p>
      <h3
        className={`
          ${type === 'detail' && data.description === null ? 'mb-6' : 'mb-3'} 
          break-keep px-1 font-medium sm:text-lg
        `}
      >
        {data.title}
      </h3>
      {type === 'detail' && data.description && (
        <p className="mb-6 block whitespace-pre-line break-keep px-1 text-sm text-gray-500 sm:text-base">
          {data.description}
        </p>
      )}
      <ul>
        {data.voteOptionWithCount.map(({ id, title, count }) => (
          <li key={id} className="peerVoteBtn peer-[VoteBtn]:mt-2">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded border p-3"
            >
              <span className="flex items-center justify-start gap-2 break-keep text-left text-base sm:text-lg">
                <Shared.ui.IconCheck className="hidden xs:block" />
                <span className="text-sm sm:text-base">{title}</span>
              </span>
              <span className="hidden">{count}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between px-1">
        <p className="text-sm text-gray-500">
          <strong className="mr-1 text-base font-medium text-blue-500">
            {new Intl.NumberFormat().format(data.totalVoteCount)}
          </strong>
          명이 참여했습니다
        </p>
        {type === 'list' ? (
          <Link
            href={`/votes/${data.voteId}`}
            className="flex items-center justify-center gap-1 text-xl text-gray-500"
          >
            <Shared.ui.IconComment />
            <span className="text-base">
              {new Intl.NumberFormat().format(data.totalCommentCount)}
            </span>
          </Link>
        ) : (
          <button
            type="button"
            title="공유하기"
            className="flex items-center justify-center gap-1 text-xl text-gray-500"
            onClick={async () => {
              const { type, status } = await share(data.title);
              console.log(`Share Type : ${type} (${status ? 'success' : 'failed'})`);
            }}
          >
            <Shared.ui.IconShare />
            <span className="text-base">공유하기</span>
          </button>
        )}
      </div>
    </>
  );
}