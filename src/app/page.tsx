'use client';

import { http } from '@/shared/api';

export default function MainPage() {
  return (
    <main>
      <button
        type="button"
        onClick={async () => http.get('/votes').then(console.log).catch(console.warn)}
      >
        api 호출
      </button>
    </main>
  );
}
