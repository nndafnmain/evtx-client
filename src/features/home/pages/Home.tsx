import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { EventRecomendation } from "./EventRecomendation";

export const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      <EventRecomendation />
      <img
        src="/banner/bnr4.png"
        className="mx-auto h-[170px] w-[97%] rounded-lg object-cover md:h-[200px]"
      />
    </main>
  );
};
