import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const TestimonialsText = ({ quote, quoteMobile }) => {
  const windowSize = useWindowSize();
  return (
    <h4 className="testimonials_text">
      <blockquote
        dangerouslySetInnerHTML={{
          __html: windowSize.innerWidth > 767 ? quote : quoteMobile,
        }}
      />
    </h4>
  );
};

export default TestimonialsText;
