import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Pro1 from "../../assets/Testimonial/lady.png";
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
                      Professor 1 - To be filled
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Pro1} alt="no-internet-connection"></img>
                    <h5>Pro 1</h5>
                    <p>Professor</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Professor 2 - To be filled
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Pro1} alt="no-internet-connection"></img>
                    <h5>Pro 2</h5>
                    <p>Professor</p>
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
