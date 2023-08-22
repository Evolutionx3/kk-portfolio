import React from "react";
import SectionTitleWrapper from "../../molecules/SectionTitleWrapper/SectionTitleWrapper";

const SocialMedia = [
  { id: 1, title: "Linked In", link: "#" },
  { id: 2, title: "Behance", link: "#" },
  { id: 3, title: "Email", link: "#" },
];

const Socials = () => {
  return (
    <div className="socials_wrapper px-5 pb-16">
      <SectionTitleWrapper additionalClass="mb-9" title="Let's Get In Touch" />
      {SocialMedia.map((social) => (
        <div key={social.id} className="social_button_wrapper py-10">
          <button className="flex social_button gap-x-2">
            {social.title}
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
          </button>
        </div>
      ))}
    </div>
  );
};

export default Socials;
