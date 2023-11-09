import React, { useEffect, useRef } from "react";
import SectionTitleWrapper from "../../molecules/SectionTitleWrapper/SectionTitleWrapper";
import TestimonialsText from "../../atoms/TestimonialsText/TestimonialsText";
import MentorInfo from "../../molecules/MentorInfo/MentorInfo";
import MentoringButton from "../../atoms/MentoringButton/MentoringButton";
import TestimonialsTextMore from "../../atoms/TestimonialsTextMore/TestimonialsTextMore";
import { Mentors } from "../../../data/data";

import { register } from "swiper/element/bundle";
register();

import { swiperStyles } from "../../../helpers/helpers";

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      direction: "horizontal",
      injectStyles: swiperStyles,
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className="testimonials_container">
      <div className="testimonials_wrapper">
        <div className="testimonials">
          <SectionTitleWrapper
            additionalClass="px-5 mb-9"
            title="Words From Mentors"
          />
          <swiper-container ref={swiperRef} init="false">
            {Mentors.map((mentor) => (
              <swiper-slide key={mentor.id}>
                <div className="xl:flex xl:gap-x-8 xl:w-full">
                  <div className="flex flex-col xl:gap-y-6">
                    <TestimonialsText
                      quoteMobile={mentor.quoteMobile}
                      quote={mentor.quote}
                    />
                    <TestimonialsTextMore reference={mentor.reference} />
                  </div>
                  <MentorInfo
                    name={mentor.name}
                    job={mentor.job}
                    company={mentor.company}
                    img={mentor.img}
                  />
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
        <MentoringButton />
      </div>
    </div>
  );
};

export default Testimonials;
