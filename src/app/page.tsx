import * as Entities from '@/entities';

export default async function MainPage() {
  return (
    <main className="pt-5">
      <div className="mb-12">
        <Entities.Banner />
      </div>
      <Entities.VoteList />
    </main>
  );
}
