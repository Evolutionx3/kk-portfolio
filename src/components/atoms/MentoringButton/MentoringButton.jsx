import React from "react";

const MentoringButton = () => {
  return (
    <div className="mentoring_button_wrapper">
      <div className="py-10 px-5">
        <button className="flex mentoring_button">
          Read References{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <g clipPath="url(#clip0_803_7690)">
              <path
                d="M5.72485 16.4905L7.11074 17.8764L15.4261 9.561L15.4261 17.1834L17.394 17.1834L17.3941 6.20714L6.41783 6.20717L6.41782 8.17514L14.0402 8.17511L5.72485 16.4905Z"
                fill="#F8FAFC"
              />
            </g>
            <defs>
              <clipPath id="clip0_803_7690">
                <rect
                  width="15.758"
                  height="15.7579"
                  fill="white"
                  transform="translate(0.664062 11.6406) rotate(-45)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MentoringButton;
