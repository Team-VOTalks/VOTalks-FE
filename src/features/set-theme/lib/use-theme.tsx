'use client';

import { useCallback, useEffect, useState } from 'react';
import { Theme } from '../types/theme';

function getCurrentTheme() {
  let theme: Theme = 'system';
  if (typeof window !== 'undefined') {
    theme = (window.localStorage.getItem('theme') as Theme | null) ?? 'system';
    if (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
  }
  return theme;
}

export default function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getCurrentTheme());
  const realTheme: Theme = getCurrentTheme() === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    document.body.classList.remove('lightTheme');
    document.body.classList.remove('darkTheme');

    if (currentTheme === 'light') {
      document.body.classList.add('lightTheme');
    }
    if (currentTheme === 'dark') {
      document.body.classList.add('darkTheme');
    }
  }, [currentTheme]);

  const setTheme = useCallback((theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  }, []);

  return { realTheme, setTheme };
}
