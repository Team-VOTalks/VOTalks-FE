'use client';

import { useEffect } from 'react';
import * as Shared from '@/shared';

export default function useModalContainer(isActive: boolean) {
  const delayedOpen = Shared.lib.useDelayForTransition(isActive, 100);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('stopScroll');
      return;
    }
    document.body.classList.remove('stopScroll');
    return;
  }, [isActive]);

  return delayedOpen;
}
