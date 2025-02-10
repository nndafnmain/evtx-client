import { EventCard } from "../../events/components/EventCard";

export const MyEvents = () => {
  return (
    <main className="my-5">
      <div className="grid grid-cols-4 gap-y-5">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </main>
  );
};
