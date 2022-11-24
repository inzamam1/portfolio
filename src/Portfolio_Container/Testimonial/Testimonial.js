import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Pro1 from "../../assets/Testimonial/Pro1.png";
import Pro2 from "../../assets/Testimonial/Pro2.png";
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
        subHeading={"What my teachers Say About Me"}
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
                      I have witnessed Inzamam transform from a naive innovative
                      thinker to a well-organized resercher, assiduously
                      improving his technical skills and seeking every
                      constructive criticism as an opportunity to explore new
                      horizons.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={""} alt="no-internet-connection"></img>
                    <h5>Dr.Meena S M</h5>
                    <p>HOD,Dept of Computer Science</p>
                    <p>KLE Technological University</p>
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

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Professor 3- To be filled
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Pro1} alt="no-internet-connection"></img>
                    <h5>Pro 3</h5>
                    <p>Professor</p>
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
