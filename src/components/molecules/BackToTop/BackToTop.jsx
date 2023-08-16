import React from "react";

const BackToTop = () => {
  return (
    <div className="text-center back_to_top">
      <button className="flex flex-col gap-y-2 uppercase w-full justify-center items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <g clipPath="url(#clip0_842_4103)">
            <path
              d="M6.11019 14.0469L7.81743 14.0469L7.81743 3.80341L12.5123 8.49833L13.7245 7.28619L6.96381 0.525505L0.203125 7.28619L1.41527 8.49833L6.11019 3.80341L6.11019 14.0469Z"
              fill="#F8FAFC"
            />
          </g>
          <defs>
            <clipPath id="clip0_842_4103">
              <rect
                width="13.7262"
                height="13.7262"
                fill="white"
                transform="translate(0 14.1797) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
        Back to top
      </button>
    </div>
  );
};

export default BackToTop;
