import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EventCard } from "../components/EventCard";

type FilterEventsDto = {
  location?: string;
  category?: string;
  startDate?: string;
  endDate?: string;
};

const fetchEvents = async (filters: Record<string, string>) => {
  const queryParams = new URLSearchParams(filters).toString();
  const response = await fetch(
    `http://localhost:3000/api/events/filter?${queryParams}`,
  );

  if (!response.ok) throw new Error("Failed to fetch events");

  return response.json();
};

export const ExploreEvents = () => {
  const { register, handleSubmit } = useForm<FilterEventsDto>({
    defaultValues: { category: "", location: "" },
  });

  const [filters, setFilters] = useState({});

  const {
    data: events,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["events", filters],
    queryFn: () => fetchEvents(filters),
    enabled: !!filters,
  });

  console.log("DATA: ", events);

  const onSubmit = (values: any) => setFilters(values);

  return (
    <main className="flex min-h-screen">
      {/* Filter Section */}
      <section className="w-[27%] border-r border-gray-400 p-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <h1 className="text-xl font-semibold text-gray-800">FILTER</h1>
          <div className="space-y-2 text-sm">
            <h1>LOCATION:</h1>
            <input
              {...register("location")}
              className="w-full rounded-md border p-1"
            />
          </div>
          <div className="space-y-2 text-sm">
            <h1>CATEGORY:</h1>
            <select
              {...register("category")}
              className="w-full rounded-md border p-1"
            >
              <option value="">All</option>
              <option value="Tech">Tech</option>
              <option value="AI">AI</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="space-y-2 text-sm">
            <h1>DATE:</h1>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-900 p-2 text-white"
          >
            Filter
          </button>
        </form>
      </section>

      {/* Events Section */}
      <section className="w-full p-3">
        {isLoading && <p>Loading events...</p>}
        {isError && <p>Error fetching events!</p>}
        {events && events.length === 0 && <p>No events found.</p>}

        <div className="grid grid-cols-4 gap-3">
          {events?.map((event: any) => (
            <EventCard
              key={event.id}
              organizer={event.user.username}
              price={event.price}
              title={event.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
