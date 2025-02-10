import { EventCard } from "../components/EventCard";

export const ExploreEvents = () => {
  return (
    <main className="flex min-h-screen">
      <section className="w-[27%] border border-r-1 border-gray-400 p-3">
        <div className="flex h-full flex-col items-center space-y-10">
          <h1 className="text-xl font-semibold text-gray-800">FILTER</h1>
          <div className="space-y-2 text-sm">
            <h1>LOCATION:</h1>
            <input className="rounded-md border border-blue-900 p-1" />
          </div>
          <div className="space-y-2 text-sm">
            <h1 className="">CATEGORY:</h1>
            <input className="rounded-md border border-blue-900 p-1" />
          </div>
          <div className="space-y-2 text-sm">
            <h1>DATE</h1>
            <input className="rounded-md border border-blue-900 p-1" />
          </div>
          <button className="w-full rounded-md bg-blue-900 p-2 text-white">
            Filter
          </button>
        </div>
      </section>
      <section className="w-full p-3">
        <div className="grid grid-cols-4 gap-y-3">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </main>
  );
};
