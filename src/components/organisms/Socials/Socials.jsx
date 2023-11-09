import React from "react";
import SectionTitleWrapper from "../../molecules/SectionTitleWrapper/SectionTitleWrapper";
import useWindowSize from "../../../hooks/useWindowSize";
import { SocialMedia } from "../../../data/data";

const Socials = () => {
  const windowSize = useWindowSize();
  return (
    <div className="socials_container px-5 pb-16">
      <div className="socials_wrapper">
        <SectionTitleWrapper
          additionalClass="mb-9"
          title="Let's Get In Touch"
        />
        {SocialMedia.map((social) => (
          <div key={social.id} className="social_button_wrapper py-10">
            <button className="flex social_button gap-x-2 xl:gap-x-6">
              {social.title}
              {windowSize.innerWidth >= 1280 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="87"
                  viewBox="0 0 68 87"
                  fill="none"
                  className="laptop:w-16 laptop:h-16"
                >
                  <g clipPath="url(#clip0_888_4403)">
                    <path
                      d="M0.96875 39.8568V48.1901H50.9688L28.0521 71.1068L33.9688 77.0234L66.9688 44.0234L33.9688 11.0234L28.0521 16.9401L50.9688 39.8568H0.96875Z"
                      fill="#F8FAFC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_888_4403">
                      <rect
                        width="67"
                        height="67"
                        fill="white"
                        transform="translate(0.296875 10.0312)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  className="mt-1"
                >
                  <g clipPath="url(#clip0_842_4439)">
                    <path
                      d="M1.02344 11.6901V14.791H19.6257L11.0997 23.3185L13.3009 25.5202L25.5784 13.2405L13.3009 0.960938L11.0997 3.16259L19.6257 11.6901H1.02344Z"
                      fill="#F8FAFC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_842_4439">
                      <rect
                        width="24.927"
                        height="24.9313"
                        fill="white"
                        transform="translate(0.695312 0.453125)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
