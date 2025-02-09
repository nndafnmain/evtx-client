import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main className="mt-5 md:mt-7">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .4"
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="mx-auto max-h-[500px] max-w-[97%] rounded-lg"
      >
        <img
          src="/banner/bnr1.png"
          className="h-[170px] w-[100%] object-cover md:h-full"
        />
        <img
          src="/banner/bnr2.png"
          className="h-[170px] w-[100%] object-cover md:h-full"
        />
        <img
          src="/banner/bnr3.png"
          className="h-[170px] w-[100%] object-cover md:h-full"
        />
      </Carousel>
    </main>
  );
};
