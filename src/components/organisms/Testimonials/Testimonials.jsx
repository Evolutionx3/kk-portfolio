import React, { useEffect, useRef } from "react";
import SectionTitleWrapper from "../../molecules/SectionTitleWrapper/SectionTitleWrapper";
import TestimonialsText from "../../atoms/TestimonialsText/TestimonialsText";
import MentorInfo from "../../molecules/MentorInfo/MentorInfo";
import MentoringButton from "../../atoms/MentoringButton/MentoringButton";
import TestimonialsTextMore from "../../atoms/TestimonialsTextMore/TestimonialsTextMore";

import { register } from "swiper/element/bundle";
register();

import { swiperStyles } from "../../../helpers/helpers";

const Mentors = [
  {
    id: 1,
    name: "Marina Yancherva",
    job: "Experience Design Team Lead",
    company: "SoftServe",
    img: "marina.png",
    quote:
      `"Katarzyna's skills in UI design are
  <span class="testimonials_text_featured">really exceptional...</span>` + '"',
    quoteMobile:
      `"Katarzyna's skills in UI design are
  <span class="testimonials_text_featured">really exceptional...</span>` + '"',
    reference: `Katarzyna and I had two sessions together to review her portfolio. She took the feedback I provided into account, was very proactive, and applied it. Additionally, I think Katarzyna's skills in UI design are really exceptional, she has a great eye for it and applies a lot of best practices to her work.`,
  },
  {
    id: 2,
    name: "Magdalena Krukowska",
    job: "Senior Product Designer",
    company: "Netguru",
    img: "magda.png",
    quote:
      `"She's curious,
  <span class="testimonials_text_featured">detail oriented</span>` +
      ' and hard working..."',
    quoteMobile:
      `"She's curious,
      <span class="testimonials_text_featured">detail oriented</span>` +
      ' and hard working..."',
  },
  {
    id: 3,
    name: "Tobiasz Konieczny",
    job: "Sr. UI/UX Game Designer",
    company: "SocialPoint / Zynga / Take-Two Interactive",
    img: "tobiasz.png",
    quote:
      `"<span class="testimonials_text_featured">Brimming with passion</span>` +
      ' and commitment for her craft..."',
    quoteMobile:
      `"<span class="testimonials_text_featured">Brimming with passion</span>` +
      ' and commitment<br/>for her craft..."',
  },
];

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
                  {/* <CarouselNextButton /> */}
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
