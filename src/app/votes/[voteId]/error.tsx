'use client';

import * as Shared from '@/shared';

export default function VoteDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <Shared.ui.NotFound retryFn={reset} />;
}
