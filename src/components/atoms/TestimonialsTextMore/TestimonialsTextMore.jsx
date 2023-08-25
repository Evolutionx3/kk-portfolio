import React, { useState } from "react";

const TestimonialsTextMore = ({ reference }) => {
  const [revealed, setRevealed] = useState(false);

  const handleReadMore = () => {
    revealed ? setRevealed(false) : setRevealed(true);
  };

  return (
    <div className="relative w-fit hidden xl:block">
      <p
        className={`testimonials_reference ${
          revealed ? "after:opacity-0" : "after:opacity-100"
        }`}
      >
        {reference}
      </p>
      <button
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-5 ${
          revealed ? "hidden" : ""
        }`}
        onClick={handleReadMore}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
        >
          <path
            opacity="0.47"
            d="M6.75758 0.5L5.24242 0.5L5.24242 9.59091L1.07576 5.42424L4.52987e-07 6.5L6 12.5L12 6.5L10.9242 5.42424L6.75758 9.59091L6.75758 0.5Z"
            fill="#F8FAFC"
          />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialsTextMore;
