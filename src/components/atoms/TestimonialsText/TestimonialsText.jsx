import React from "react";

const TestimonialsText = ({ quote }) => {
  return (
    <h4 className="testimonials_text">
      <blockquote dangerouslySetInnerHTML={{ __html: quote }} />
    </h4>
  );
};

export default TestimonialsText;
