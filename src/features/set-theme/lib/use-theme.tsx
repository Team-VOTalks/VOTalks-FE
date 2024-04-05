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
  const [realTheme, setRealTheme] = useState<'light' | 'dark'>('light');

  const setLightTheme = () => {
    document.body.classList.remove('darkTheme');
    document.body.classList.add('lightTheme');
    setRealTheme('light');
  };
  const setDarkTheme = () => {
    document.body.classList.remove('lightTheme');
    document.body.classList.add('darkTheme');
    setRealTheme('dark');
  };

  useEffect(() => {
    if (currentTheme === 'dark') {
      setDarkTheme();
      return;
    }
    if (currentTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkTheme();
      return;
    }
    setLightTheme();
    return;
  }, [currentTheme]);

  const setTheme = useCallback((theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  }, []);

  return { realTheme, setTheme };
}
