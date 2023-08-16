import React from "react";
import SectionTitleWrapper from "../../molecules/SectionTitleWrapper/SectionTitleWrapper";
import TestimonialsText from "../../atoms/TestimonialsText/TestimonialsText";
import CarouselNextButton from "../../atoms/CarouselNextButton/CarouselNextButton";
import MentorInfo from "../../molecules/MentorInfo/MentorInfo";
import MentoringButton from "../../atoms/MentoringButton/MentoringButton";

const Testimonials = () => {
  return (
    <div className="testimonials_wrapper">
      <div className="testimonials">
        <SectionTitleWrapper title="Words From Mentors" />
        <TestimonialsText />
        <CarouselNextButton />
        <MentorInfo />
      </div>
      <MentoringButton />
    </div>
  );
};

export default Testimonials;
