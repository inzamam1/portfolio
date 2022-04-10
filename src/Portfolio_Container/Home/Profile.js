import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile_container">
      This site is in constant development, Please check after some days 😀
      <div className="profile_parent">
        <div className="profile_details">
          <div className="colz">
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
          <div className="profile_details_role">
            <span className="primary_text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Developer",
                    1000,
                    "Security enthusiast ",
                    1000,
                    "Full Stack dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile_role_tagline">
                Commitment and Curiosity
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
      </div>
    </div>
  );
}
