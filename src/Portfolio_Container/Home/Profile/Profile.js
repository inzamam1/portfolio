import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile_container">
      <div className="profile_parent">
        <div className="profile_details">
          <div className="colz">
            <div className="colz_icon">
              <a href="https://twitter.com/InzamamSayyed3">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/inzamam-sayyed-601120198/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/inzamam1">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile_details_name">
            <span className="primary_text">
              {""}
              Hello I am <span className="highlighted_text">Inzamam</span>
            </span>
          </div>
          <div className="profile_details_role">
            <span className="primary_text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software engineer",
                    2000,
                    "Security enthusiast ",
                    2000,
                    "Full Stack developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile_role_tagline">
                As long as I have a want, I have a reason for living,
                Satisfaction is death - Bernard Shaw
              </span>
            </span>
          </div>
          <div className="profile_options">
            <a
              href="https://drive.google.com/file/d/1iwiSZlTu4U7OJ4IeHtS0EzvxWmxrc0Xe/view?usp=sharing"
              download="in.pdf"
            >
              <button className="btn primary-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile_picture">
          <div className="profile_picture_background"></div>
        </div>
      </div>
    </div>
  );
}
