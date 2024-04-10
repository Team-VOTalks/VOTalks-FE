'use client';

import * as Shared from '@/shared';

export default function MainPage() {
  return (
    <main>
      <button
        type="button"
        onClick={async () => Shared.api.client.get('/votes').then(console.log).catch(console.warn)}
      >
        api 호출
      </button>
    </main>
  );
}
