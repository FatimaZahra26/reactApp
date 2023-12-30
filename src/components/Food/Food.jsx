import React from 'react'
import { useInView } from "react-intersection-observer";
import couscous__img from "../../assets/images/couscous-couscous.jpg";
import tagine__img from "../../assets/images/tagine.jpg";
import pastilla__img from "../../assets/images/pastilla.jpg";
import harira__img from "../../assets/images/harira.jpg";
import SNAILSOUP__img from "../../assets/images/SNAILSOUP.jpg";
import kaabghzal__img from "../../assets/images/kaabghzal.jpg";
import { useEffect } from "react";
const locations = [
    {
      name: "TAGINE",
      desc: "We had tagine multiple times while in Morocco. It’s a clay cooking pot with a conical lid with multiple types of dishes slow cooked inside (beef, lamb, chicken, veggies, etc). You can get it practically anywhere, at roadside stops, cafés, and nicer restaurants.",
    
      rate: 6,
      image: tagine__img,
    },
    {
      name: "COUSCOUS (NATIONAL DISH OF MOROCCO)",
      desc: "couscous is originally from Morocco and typically served with meat or vegetable stew. Traditionally, they prepare couscous on the Muslim holy day (Friday) and for special occasions, but you can find it at most restaurants and cafes.",
  
      rate: 5,
      image: couscous__img,
    },
    {
      name: " BASTILLA (CHICKEN OR PIGEON PIE)",
      desc: "If you love the mix of sweet and salty flavors than you definitely need to try bastilla (also spelled pastilla). This flaky pie is traditionally made with pigeon, but more commonly served with chicken now.",
     
      rate: 4,
      image: pastilla__img,
    },
    {
        name: " HARIRA",
        desc: "Harira is basically a Moroccan lentil soup usually served as a starter or used during Ramadan to break the fast at dusk.",
       
        rate: 4,
        image: harira__img,
      },
      {
        name: " SNAIL SOUP",
        desc: "Snail soup is a Moroccan dish you can find all over the country. Use a toothpick to pick out the snails from the shells then slurp up the soup. Locals believe the broth is good for digestion and fever.",
       
        rate: 3,
        image: SNAILSOUP__img,
      },
      {
        name: " KAAB EL GHAZAL",
        desc: "Kaab el Ghazal, or gazelle horns, are crescent-shaped pastries have almond paste scented with orange flower water and cinnamon.",
       
        rate: 5,
        image: kaabghzal__img,
      },
  ];
const Food = ({ setSectionInView }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.2,
      });
    
      useEffect(() => {
        if (inView) {
          setSectionInView("feature");
        }
      }, [inView]);
  return (
    <section ref={ref} className="bg-base-200" id="feature">
    <h1 className="uppercase text-center font-bold text-3xl pb-10" id="feature">
      <span className="text-accent">S</span>crumptious And{" "}
      <span className="text-accent">t</span>asty dishes
    </h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10" >
      {locations.map((loc, index) => (
        <div key={index} className="card card-compact bg-base-100 shadow-xl" id="card">
          <figure className="max-h-40 lg:max-h-48 xl:max-h-52 h-full relative">
            <img className="h-full w-full" src={loc.image} alt={loc.name} />
           
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-accent lg:text-2xl " id="name">
              {loc.name}
            </h2>
            <p>{loc.desc}</p>
            <div className="flex">
              {[1, 2, 3, 4, 5, 6].map((star, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 ${
                    index < loc.rate ? "fill-orange-500" : "fill-transparent"
                  }  stroke-orange-500 `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              ))}
            </div>

           
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Food