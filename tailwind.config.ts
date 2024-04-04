import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '320px',
        ...defaultTheme.screens,
      },
      colors: {
        gray: Array.from({ length: 10 }, (_, i) => `var(--grsc-${i}00)`) // prettier-ignore
          .reduce((gray, v, i) => Object.assign(gray, { [`${i}00`]: v }), {}),
        red: {
          100: 'var(--smtc-warn-light)',
          200: 'var(--smtc-warn-sub)',
          500: 'var(--smtc-warn)',
        },
        yellow: {
          100: 'var(--smtc-caution-light)',
          200: 'var(--smtc-caution-sub)',
          500: 'var(--smtc-caution)',
        },
        green: {
          100: 'var(--smtc-success-light)',
          200: 'var(--smtc-success-sub)',
          500: 'var(--smtc-success)',
        },
        blue: {
          100: 'var(--smtc-info-light)',
          200: 'var(--smtc-info-sub)',
          500: 'var(--smtc-info)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
