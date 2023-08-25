import React from "react";

const MentorInfo = ({ name, job, company, img }) => {
  return (
    <div className="flex xl:flex-col items-center">
      <div className="w-screen xl:w-full">
        <img className="mentor_img xl:mx-auto" src={img} />
      </div>
      <div className="mentors_info_wrapper">
        <p className="mentors_info">{name}</p>
        <p className="mentors_info job">
          <strong>{job}</strong>
        </p>
        <p className="mentors_info">{company}</p>
      </div>
    </div>
  );
};

export default MentorInfo;
