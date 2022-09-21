import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div children="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 80 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 30 },
    { skill: "React Js", ratingPercentage: 35 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: "DIfferential Neuroplasticity",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Hebbian plasticity on RNNs",
      subHeading: "Technologies Used:RNN, Deep Learning",
    },
    {
      title: "DIfferential Neuroplasticity",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Hebbian plasticity on RNNs",
      subHeading: "Technologies Used:RNN, Deep Learning",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"KLE Technological University, India"}
        subHeading={"Bachelors of Engineering"}
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Expert Pre University College"}
        subHeading={"PUC"}
        fromDate={"2015"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"St Marys High School"}
        subHeading={"High School"}
        fromDate={"2012"}
        toDate={"2015"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Twilio"}
        subHeading={"Techinial Developer suppport"}
        fromDate={"2022"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Hello i am a developer support engineer
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">-Working on Rest API</span>
        <br />
        <span className="resume-description-text">
          -Supporting users to use products
        </span>
        <br />
        <span className="resume-description-text">-learning products</span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="'skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-pecentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading heading="Gardening" description="plants plants " />
        <ResumeHeading heading="D i Y" description="led led " />
        <ResumeHeading heading="Neon" description="plants plants " />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops, no internet connection"
        />
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <div className="resume-container screen-container" id={props.id || " "}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
