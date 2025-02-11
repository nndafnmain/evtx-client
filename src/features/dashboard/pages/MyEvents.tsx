import { useQuery } from "@tanstack/react-query";
import { EventCard } from "../../events/components/EventCard";

const fetchData = async (userId: string = "cm6xg1gnd0003ukgofhkbmgul") => {
  const res = await fetch(`http://localhost:3000/api/events/${userId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

export const MyEvents = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["myEvents"],
    queryFn: () => fetchData(),
  });

  if (isLoading) {
    return <h1>LOADINGGGG</h1>;
  }

  if (isError) {
    return <h1>ERRORRRRRRR</h1>;
  }

  console.log("DATA: ", data);

  return (
    <main className="my-5">
      <div className="grid grid-cols-4 gap-y-5">
        {data.map((dt: any, idx: any) => {
          return (
            <div key={idx}>
              <EventCard
                organizer={dt.user.username}
                price={dt.price}
                title={dt.title}
              />
            </div>
          );
        })}
        {/* <EventCard />
        <EventCard />
        <EventCard />
        <EventCard /> */}
      </div>
    </main>
  );
};
