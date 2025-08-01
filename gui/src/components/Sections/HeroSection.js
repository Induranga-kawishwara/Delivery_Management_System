import React from "react";
import TheButton from "../Ui/TheButton";
import classes from "./HeroSection.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import FoodImage from "../../assets/image/FoodImage.png";

const HeroSection = () => {
  //Rendering the Hero section(Landing page) on the DOM
  return (
    <section id="hero">
      <Container>
        <Row className={`${classes.row} mx-auto`}>
          <Col
            lg={6}
            className="p-0"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="1500"
          >
            <div className={classes.text__div}>
              <h1>
                Enjoy <span>home made Spices</span> far away from home
              </h1>
              <p>
              Bringing Flavor to Your Fingertips: Elevate Your Culinary Experience with Premium Spices Anytime, Anywhere
              </p>

              <RouterLink
                  to="/cartlog"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                <TheButton>Order Now</TheButton>
                </RouterLink>
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <div className={`ms-auto`}>
              <img
                className={classes.food__image}
                src={FoodImage}
                fluid="true"
                alt="Food pic"
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="1500"
              ></img>
            </div>
          </Col>
        </Row>
        <Row
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <div className={classes.number__properties}>
            <div>
              <p className={classes.number__properties__digit}>500+</p>
              <p className={classes.number__properties__text}>Food partners</p>
            </div>
            <div className="mx-4">
              <p className={classes.number__properties__digit}>1k+</p>
              <p className={classes.number__properties__text}>
                orders delivered
              </p>
            </div>
            <div>
              <p className={classes.number__properties__digit}>12k+</p>
              <p className={classes.number__properties__text}>Clients</p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
  //END
};

export default HeroSection;
