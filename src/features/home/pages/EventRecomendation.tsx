import Carousel from "react-multi-carousel";
import { EventCard } from "../../events/components/EventCard";
import { API_BASE_URL } from "../../../utils/constant";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export const fetchData = async () => {
  const res = await fetch(`${API_BASE_URL}/events/?page=1&limit=8`);
  if (!res.ok) throw new Error("Failed to fetch");
  return await res.json();
};

export const EventRecomendation = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };

  const { data } = useQuery({
    queryKey: ["eventRecomendation"],
    queryFn: fetchData,
  });

  console.log("RECOMENDASI DATA: ", data);

  return (
    <main className="my-6 p-1 md:container">
      <h1 className="text-xl font-semibold md:text-2xl">Event Recomendation</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="grid w-[97%] grid-cols-6 p-4"
      >
        {data?.data?.map((event: any) => (
          <Link to={`/event/detail/${event.slug}`}>
            <EventCard
              key={event.id}
              organizer={event.user.username}
              price={event.price}
              title={event.title}
            />
          </Link>
        ))}
      </Carousel>
    </main>
  );
};
