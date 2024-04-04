'use client';
import { useEffect, useRef, useState } from 'react';

export default function useDelayForTransition(isVisible: boolean, delay: number) {
  const [visibleDelay, setVisibleDelay] = useState(false);
  const delayTimer = useRef<number | null>(null);

  useEffect(() => {
    if (isVisible) {
      if (!!delayTimer.current) clearTimeout(delayTimer.current);
      delayTimer.current = window.setTimeout(() => setVisibleDelay(true), delay);
    }

    return () => {
      setVisibleDelay(false);
    };
  }, [isVisible]);

  return visibleDelay;
}
