import { Calendar, Clock, LocateFixedIcon } from "lucide-react";
import { API_BASE_URL } from "../../../utils/constant";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchData = async (slug: string) => {
  const response = await fetch(`${API_BASE_URL}/events/slug/?slug=${slug}`);
  if (!response.ok) throw new Error("Error to fetch API!");
  return await response.json();
};

export const EventDetail = () => {
  const { slug } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["eventSlug", slug],
    queryFn: () => fetchData(slug as string),
    enabled: !!slug,
  });
  console.log("DATA DETAIL: ", data);

  return (
    <main className="pb-16 md:container">
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3 md:p-10">
        {/* Image Section */}
        <section className="md:col-span-2">
          <img
            src="/event/ed1.jpg"
            alt=""
            className="w-full md:w-[100%] md:rounded-md"
          />
        </section>

        {/* Event Info */}
        <section className="rounded-md md:col-span-1 md:border md:border-gray-300 md:shadow-md">
          <section className="flex h-full flex-col justify-between space-y-2 p-3 md:space-y-5 md:p-5">
            <h1 className="text-xl font-semibold md:mb-10 md:text-2xl">
              {data.title}
            </h1>
            <div className="flex items-center gap-3">
              <Calendar color="blue" size={16} />
              <p className="text-sm">05 Jul - 05 Jul 2025</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock color="blue" size={16} />
              <p className="text-sm">{data.time}</p>
            </div>
            <div className="flex items-center gap-3">
              <LocateFixedIcon color="blue" size={16} />
              <p className="text-sm">{data.location}</p>
            </div>
            <hr className="my-5 mt-3" />
            <section className="flex items-center gap-5">
              <div>
                <img
                  src="https://github.com/shadcn.png"
                  className="h-10 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-sm text-gray-400">Held by: </h1>
                <p className="text-sm font-semibold">{data?.user?.username}</p>
              </div>
            </section>
          </section>
        </section>

        {/* Description */}
        <section className="space-y-3 p-3 md:col-span-2 md:mt-10">
          <h1 className="text-xl font-bold">Description</h1>
          <p className="text-base leading-8 tracking-wide text-gray-700">
            {data.description}
          </p>
        </section>

        {/* Buy Ticket Button (Sticky on Desktop, Fixed on Mobile) */}
        <section className="md:col-span-1 md:mt-10">
          <section className="relative rounded-md border border-gray-300 p-5 shadow-md md:sticky md:top-10">
            <button className="hidden w-full rounded-md bg-blue-800 p-2 text-white md:block">
              Buy Ticket
            </button>
          </section>
        </section>
      </section>

      {/* Fixed Buy Button for Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow md:hidden">
        <button
          className="w-full rounded-md bg-blue-800 p-2 text-white"
          onClick={() => alert("ASYU")}
        >
          Buy Ticket
        </button>
      </div>
    </main>
  );
};
