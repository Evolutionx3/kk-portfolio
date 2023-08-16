import React from "react";

const MentorInfo = () => {
  return (
    <div className="flex items-center">
      <div>
        <img className="-ml-5 mentor_img" src="marina.png" />
      </div>
      <div className="mentors_info_wrapper">
        <p className="mentors_info">Marina Yancherva</p>
        <p className="mentors_info">
          <strong>Experience Design Team Lead</strong>
        </p>
        <p className="mentors_info">SoftServe</p>
      </div>
    </div>
  );
};

export default MentorInfo;
