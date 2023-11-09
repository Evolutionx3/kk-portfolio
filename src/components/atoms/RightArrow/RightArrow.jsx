import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const RightArrow = () => {
  const windowSize = useWindowSize();
  return (
    <>
      {windowSize.innerWidth >= 1280 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="86"
          viewBox="0 0 67 86"
          fill="none"
        >
          <g clipPath="url(#clip0_888_9303)">
            <path
              d="M0.671875 39.8255V48.1589H50.6719L27.7552 71.0755L33.6719 76.9922L66.6719 43.9922L33.6719 10.9922L27.7552 16.9089L50.6719 39.8255H0.671875Z"
              fill="#626262"
            />
          </g>
          <defs>
            <clipPath id="clip0_888_9303">
              <rect
                width="67"
                height="67"
                fill="white"
                transform="translate(0 10)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <path
            d="M0.789063 16.7415L0.789063 21.3926L28.6945 21.3926L15.9045 34.1833L19.2066 37.4857L37.6242 19.067L19.2066 0.648438L15.9045 3.95076L28.6945 16.7415L0.789063 16.7415Z"
            fill="#F8FAFC"
          />
        </svg>
      )}
    </>
  );
};

export default RightArrow;
