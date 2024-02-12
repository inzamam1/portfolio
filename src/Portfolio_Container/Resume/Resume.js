import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

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
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
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
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },

    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Python Programming" },
    { skill: "Javascript" },
    { skill: "React Js" },
    { skill: "Machine Learing" },
    { skill: "Alexa Skils Kit" },
    { skill: "AWS Lambda" },
    { skill: "Full Stack Development" },
  ];

  const projectDetails = [
    {
      title:
        "IMAGE RECONSTRUCTION USING NEUROMODULATION ON DIFFERENTIAL PLASTICITY",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Optimizing Recurrent Neural Networks to suite meta-learning process.Induction of Hebbian trace coupled with Neuromodulation to efficiently reconstruct degraded 2D images",

      subHeading: "Technologies Used:RNN, Deep Learning",
    },
    {
      title: "STABILITY OF GENERATIVE ADVERSARIAL NETWORKS",
      duration: { fromDate: "2019", toDate: "2020" },
      description:
        "Discounting the mode collapse adversity of the Generative Adversarial Networks(GAN's).The machine learning model thus is enhanced to learn and generate variety of images ",
      subHeading: "Technologies Used:CNN, Deep Learning, GAN",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"KLE Technological University, India"}
        description={"GPA: 9.02/10"}
        subHeading={"Bachelors of Engineering"}
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Expert Pre University College"}
        subHeading={"Pre University"}
        fromDate={"2015"}
        toDate={"2017"}
        description={"Grade:89.82%"}
      />
      <ResumeHeading
        heading={"St Marys High School"}
        subHeading={"High School"}
        fromDate={"2012"}
        toDate={"2015"}
        description={"Grade:92%"}
      />
    </div>,
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
    </div>,
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
    </div>,
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Twilio"}
        subHeading={"Technical Support Engineer- 2 - Developer"}
        fromDate={"2022"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">Tasks</span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          -Working and familiarizing with communication systems, REST API,
          WebRTC, Web Application Development
        </span>
        <br />
        <span className="resume-description-text">
          -Solving Developer issues related to 8 different Twilio Products for
          Asia-Pacific-Japan region
        </span>
        <br />
        <span className="resume-description-text">
          -Assisting developers and customers with complex technical issues
        </span>
        <br />
        <span className="resume-description-text">
          -Reviewing and debugging customer code and troubleshooting
        </span>
        <br />
        <span className="resume-description-text">
          -Grading assessments for new hires
        </span>
        <br />
        <span className="resume-description-text">
          -Onboarding new hires and training them on the products.
        </span>
        <br />
        <span className="resume-description-text">
          -Building solution for the customer on 6 different programming
          languages and for 3 different platforms(Web, IOS, Android)
        </span>
      </div>
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Gardening"
        description="Gardening has been my go-to hobby as it teaches patience and long term benifits"
      />
      <ResumeHeading
        heading="LED NEON signs"
        description="I took up the hobby of building custom neon sign boards during the pandemic. My hobby attracted many people who wanted to get a custom board created and I further encorporated this as an in-house business"
      />
      <ResumeHeading
        heading="Numismatics"
        description="I have been fond of collecting old items and coins in particular excite me to know the rich heritage of a place and collecting them excites me "
      />
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
          alt=""
        />
        <span className="bullet-label">{bullet.label}</span>
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
