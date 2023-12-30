import React, { useEffect } from "react";

import author_1_img from "../../assets/images/will.png";
import author_2_img from "../../assets/images/mbapee.png";
import author_3_img from "../../assets/images/fa.png";
import { useInView } from "react-intersection-observer";

const reviews = [
  {
    author_name: "Will Smith",
    author_img: author_1_img,
    text: "mages accompanying the comment showed a number of locals in traditional dress and Smith himself wearing a multi-coloured outfit and traditional Moroccan shoes. Unfortunately he had the shoes on the wrong foot and instead of the Arabic writing reading “biladi”, my country in Arabic, the shoes read “di” “blah”Smith paid a visit to Morocco’s artists’ residence of Al Maqam, outside of Marrakech, where he appeared in a YouTube video dancing to the traditional rhythms of Gnawa in traditional dress",
    rate: 4,
  },
  {
    author_name: "Kylian Mbappé",
    author_img: author_2_img,
    text: "French international football player, Kylian Mbappé Lottin, is currently visiting Morocco to rest and celebrate the New Year holiday.Despite the global coronavirus pandemic, the Paris Saint-Germain (PSG) player chose Marrakech to spend his holidays and give himself the time he needs to unwind and boost his energy before the National Championship and the UEFA Champion League",
    rate: 5,
  },
  {
    author_name: "Adrian Grenier",
    author_img: author_3_img,
    text: "Also in June, US actor Adrian Grenier chose the Atlas Mountains in Morocco to celebrate his wedding with his partner Jordan Roemelle.Grenier posted Instagram pictures from the ceremony, saying that he had always been romantic.“In fact, I declared to my mother at the mere age of 8: Mom, I am a one-woman man!” he said.  Grenier's partner also celebrated the couple’s wedding on her Instagram, emphasizing her pride to be his wife.“I am so proud of our journey. I am elated to call you my husband and to live a life infused with our endless magic,”",
    rate: 4,
  },
];

export const Reviews = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setSectionInView("reviews");
    }
  }, [inView]);
  return (
    <section ref={ref} id="reviews" className="relative reviews ">
      <h1 className="uppercase text-center font-bold text-3xl pb-20">
        <span className="text-warning">r</span>eviews about Morocco
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-10">
        {reviews.map((review, index) => (
          <div key={index} className="card bg-base-100 shadow-xl" id="review">
            <div className="avatar flex items-center justify-center -mt-10">
              <div className="w-24 rounded-full">
                <img src={review.author_img} />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title text-accent justify-center">
                {review.author_name}
              </h2>
              <p className="text-center" id="reviewtext">{review.text}</p>
              <div className="card-actions justify-center">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 ${
                      index < review.rate
                        ? "fill-orange-500"
                        : "fill-transparent"
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
  );
};
