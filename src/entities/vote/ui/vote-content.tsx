'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import type { Vote } from '../types';
import share from '../lib/share';
import { W_PERCENT } from '../constants';
import * as Shared from '@/shared';

export default function VoteContent({ data, type }: { data: Vote; type: 'list' | 'detail' }) {
  const isVoted = useMemo(
    () => data.voteOptionWithCount.some(({ isChecked }) => isChecked),
    [data.voteOptionWithCount],
  );
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
        {data.voteOptionWithCount.map(({ id, title, count, isChecked }) => (
          <li key={id} className="peerVoteBtn peer-[VoteBtn]:mt-2">
            <button
              type="button"
              className={`
                ${
                  isVoted && isChecked
                    ? 'border-blue-500 font-medium text-blue-500'
                    : isVoted
                      ? 'border-gray-200 bg-transparent'
                      : 'border-gray-100 bg-gray-100'
                }
                relative flex w-full items-center justify-between overflow-hidden rounded border p-3
              `}
              disabled={isVoted}
            >
              <span className="relative z-10 flex items-center justify-start gap-2 break-keep text-left text-base sm:text-lg">
                <Shared.ui.IconCheck className="hidden xs:block" />
                <span className="text-sm sm:text-base">{title}</span>
              </span>
              {isVoted && (
                <>
                  <span className="relative z-10 text-sm font-normal">{count}</span>
                  <span
                    className={`
                      ${isChecked ? 'bg-blue-100' : 'bg-gray-100'} 
                      ${W_PERCENT[Math.floor((count / data.totalVoteCount) * 100)]} 
                      absolute bottom-0 left-0 right-0 top-0 z-0
                    `}
                  ></span>
                </>
              )}
            </button>
          </li>
        ))}
      </ul>
      <div
        className={`
          ${type === 'detail' ? 'mt-5' : 'mt-3'} 
          flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-1
        `}
      >
        <p className="text-sm text-gray-500">
          <strong className="mr-1 text-base font-medium text-blue-500">
            {new Intl.NumberFormat().format(data.totalVoteCount)}
          </strong>
          명이 참여했습니다
        </p>
        {type === 'list' ? (
          <Link
            href={`/votes/${data.voteId}`}
            className="flex items-center justify-center gap-1 text-lg text-gray-500 sm:text-xl"
          >
            <Shared.ui.IconComment />
            <span className="text-sm sm:text-base">
              {new Intl.NumberFormat().format(data.totalCommentCount)}
            </span>
          </Link>
        ) : (
          <button
            type="button"
            title="투표 공유하기"
            className="flex items-center justify-center gap-1 text-lg text-gray-500 sm:text-xl"
            onClick={async () => {
              const { type, status } = await share(data.title);
              console.log(`Share Type : ${type} (${status ? 'success' : 'failed'})`);
            }}
          >
            <Shared.ui.IconShare />
            <span className="text-sm sm:text-base">공유하기</span>
          </button>
        )}
      </div>
    </>
  );
}
