import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Pro1 from "../../assets/Testimonial/Pro1.png";
import Pro2 from "../../assets/Testimonial/Pro2.png";
import Pro3 from "../../assets/Testimonial/Pro3.png";
import Balu from "../../assets/Testimonial/Balu.jpeg";
import Yamu from "../../assets/Testimonial/Yamu.jpeg";

import "./Testimonial.css";
export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animationOut: "bounceOutRight",
    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What my Mentors Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      As his direct manager, I've noticed him expressing desire
                      in learning and upskilling himself, and he's earned his
                      position as a Technical Support Engineer due to his
                      enthusiasm and drive for professional advancement. I have
                      watched Inzamam develop into a confident and capable
                      individual.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Yamu} alt="no-internet-connection"></img>
                    <h5>Yamuna Ganga</h5>
                    <p>Manager, Technical Support</p>
                    <p>Twilio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I have witnessed Inzamam transform from a naive innovative
                      thinker to a well-organized resercher, assiduously
                      improving his technical skills and seeking every
                      constructive criticism as an opportunity to explore new
                      horizons.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Pro3} alt="no-internet-connection"></img>
                    <h5>Dr.Meena S M</h5>
                    <p>Dean-FSC,School of Computer Science and Engineering</p>
                    <p>KLE Technological University</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Inzamam is extremely responsible; not only is he
                      accountable for his own KPIs but as a tenured member in
                      the team he coaches the new team members and assists them
                      with other issues they may have. He has never hesitated in
                      helping his peers across multiple regions.I can always
                      rely on him with the tasks assigned and can be sure that
                      he will drive it to completion.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Balu} alt="no-internet-connection"></img>
                    <h5>Balu Vasudevan</h5>
                    <p>Manager, Technical Support</p>
                    <p>Twilio</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      An Ambitious learner, hardworking student is how I would
                      Personify my student. Inzamam has excellent organizational
                      skill, he is able to successfully complete multiple tasks
                      with the favorable results despite deadline pressure.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Pro1} alt="no-internet-connection"></img>
                    <h5>Dr.P.G.Sunitha Hiremath</h5>
                    <p>Professor</p>
                    <p>KLE Technological University</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Inzamam possesses an unparalleled ability of grasping
                      fundamentals, always ready to try his hand on new things
                      and always finds himself on the learning curve
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Pro2} alt="no-internet-connection"></img>
                    <h5>Sunil.V.Gurlahosur</h5>
                    <p>Asst.Professor</p>
                    <p>KLE Technological University</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
