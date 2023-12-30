import React, { useEffect } from "react";
import about__img from "../../assets/images/about.jpeg";
import { useInView } from "react-intersection-observer";
export const About = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setSectionInView("about");
    }
  }, [inView]);
  return (
    <section ref={ref} id="about">
      <h1 className="uppercase text-center font-bold text-3xl pb-10" id="aboutus">
        <span className="text-accent">a</span>bout{" "}
        <span className="text-accent">M</span>orocco
      </h1>

      <div className="flex flex-col lg:flex-row  gap-10  " >
        {/* About Image */}
        <div>
          <img
            className="xl:h-[65vh] xl:w-[70vw]"
            src={about__img}
            alt="about-img"
            id="aboutimg"
          />
        </div>
        {/* About Content */}
        <div className="text-center xl:text-left  flex flex-col  justify-center" id="about1">
          <h2 className="text-4xl lg:text-5xl font-bold uppercase text-center lg:text-left text-accent ">
            why choose Morocco?
          </h2>
          <p className="my-3 lg:text-left lg:text-lg " >
          The country provides a rich experience with its historic cities like Marrakech and Fes,<br/>
          lively markets, opulent palaces, and fascinating medinas.
          Diverse landscapes, from<br/> the Atlas Mountains to the Sahara Desert,appeal to adventure enthusiasts and nature<br/> lovers.The renowned Moroccan cuisine, 
          celebrated for its exquisite flavors, is also a major<br/> draw. In summary, Morocco is a compelling destination that seamlessly blends history<br/>, culture, and breathtaking natural beauty.
          Morocco's enchanting blend of old-world charm<br/> and modern vibrancy adds to its allure. The labyrinthine streets of the medinas echo with centuries of history, while contemporary art scenes and trendy cafes reflect a dynamic present.
          </p>

          

        
        </div>
      </div>
    </section>
  );
};
