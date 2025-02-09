import Carousel from "react-multi-carousel";
import { EventCard } from "../../events/components/EventCard";

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
  return (
    <main className="my-6 p-1 md:container">
      <h1 className="text-xl font-semibold md:text-2xl">Event Recomendation</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="grid w-[97%] grid-cols-6 p-4"
      >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Carousel>
    </main>
  );
};
