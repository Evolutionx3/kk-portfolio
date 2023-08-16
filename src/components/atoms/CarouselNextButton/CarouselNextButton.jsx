import React from "react";

const CarouselNextButton = () => {
  return (
    <div className="flex w-full justify-end -mb-8">
      <button className="carousel_next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M0.273438 7.89878V10.1026H13.4966L7.43597 16.1632L9.00071 17.728L17.728 9.00071L9.00071 0.273438L7.43597 1.83818L13.4966 7.89878H0.273438Z"
            fill="#F8FAFC"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselNextButton;
