'use client';

import { useEffect } from 'react';
import * as Shared from '@/shared';

export default function VoteDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.warn(error.toString());
  }, []);
  return <Shared.ui.NotFound retryFn={reset} />;
}
