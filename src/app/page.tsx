import * as Entities from '@/entities';

export default async function MainPage() {
  return (
    <main className="pt-5">
      <Entities.VoteList />
    </main>
  );
}
