import React, { useEffect } from "react";
import home_video from "../../assets/images/home2.mp4";
import { useInView } from "react-intersection-observer";

export const Home = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setSectionInView("home");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full min-h-screen pt-20 pb-10 relative flex flex-col items-center lg:flex-row lg:justify-center gap-10 "
    >
      <video
        autoPlay
        loop
        muted
        id="HomeVideo"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={home_video} type="video/mp4" />
      </video>
      <div>
        <h2 className="text-4xl lg:text-5xl font-bold uppercase text-center lg:text-left text-primary-content ">
          explore <span id="M">Morocco</span>,<br />
          Discover <br />  its cities.
        </h2>
        <p className="intro">
         WondersOfMorocco is a specialized Tour Operator and Morocco Destination Management Travel Company offering tailor-made tours, customized holidays and Incentives specialist in Morocco. We design your tours and events to Morocco to explore the exotic culture and sights of a fascinating land
        </p>
      </div>

     
    </section>
  );
};
