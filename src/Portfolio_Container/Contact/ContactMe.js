import React from "react";
import Typical from "react-typical";

import imgBack from "../../../src/images/mailz.jpeg";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading
        subHeading={"Lets keep in Touch"}
        title={"Connect with Me"}
      />
      <div className="central-form">
        <div className="col">
          <h2>
            <Typical
              loop={Infinity}
              steps={["Here are my social links😀", 1000]}
            />
          </h2>
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
        <div className="back-form">
          <div className="img-back">
            <img src={imgBack} alt="image not found" />
          </div>
        </div>
      </div>
    </div>
  );
}
