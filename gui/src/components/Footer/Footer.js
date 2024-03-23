import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Footer.module.css";
import Logo from "../../assets/Logo/Logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import insta from "../../assets/Icon/instagram.png";
import twitter from "../../assets/Icon/twitter.png";
import fb from "../../assets/Icon/facebook.png";

const Footer = () => {
  //Structure & layout of the footer
  return (
    <div className={classes.footer_bg}>
      <Container>
        <Row className={classes.row}>
          <Col lg={6}>
            <div className={classes.info}>
              <div className={classes.image_div}>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <img
                    className={classes.navbar_brand}
                    src={Logo}
                    alt="logo"
                    style={{ width: "250px", height: "auto" }}
                  ></img>
                </Link>
              </div>
              <div className={classes.content_div}>
                <p>
                  Solution for easy and flexible getting meals for the
                  household.You can trust us anywhere through this platform
                </p>
                <p>
                  &copy;2024 Made with <i className="bi bi-heart-fill"></i>{" "}
                  by&nbsp;
                  <a
                    href="https://lk.linkedin.com/in/sandin-kodagoda-344440199"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.eniola_codes}
                  >
                    SandinKodagoda
                  </a>
                </p>
              </div>
            </div>
          </Col>

          <Col lg={3}>
            <div className={classes.about}>
              <h3>About</h3>

              <RouterLink
                to="/rider"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <p>Register</p>
              </RouterLink>
              <RouterLink
                to="/log"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <p>Login To System</p>
              </RouterLink>
              <RouterLink
                to="/"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <p>Sample</p>
              </RouterLink>

              <RouterLink
                to="/"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <p>Sample</p>
              </RouterLink>

              <RouterLink
                to="/"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <p>Sample</p>
              </RouterLink>
            </div>
          </Col>

          <Col lg={3}>
            <div className={classes.social}>
              <h3>Social</h3>
              <a
                href="https://www.instagram.com/code_redex/"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <img
                    src={insta}
                    alt="instagram"
                    className={classes.social_icon}
                  ></img>
                </p>
              </a>
              <a
                href="https://mobile.twitter.com/EniolaCodes/"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <img
                    src={twitter}
                    alt="twitter"
                    className={classes.social_icon}
                  ></img>
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/eni-ola/"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <img
                    src={fb}
                    alt="facebook"
                    className={classes.social_icon}
                  ></img>
                </p>
              </a>
            </div>
          </Col>

          <p className={classes.mobile_copy}>
            &copy;2024 Made with <i className="bi bi-heart-fill"></i> by&nbsp;
            <a
              href="https://lk.linkedin.com/in/sandin-kodagoda-344440199"
              target="_blank"
              rel="noreferrer"
              className={classes.eniola_codes}
            >
              SandinKodagoda
            </a>
          </p>
        </Row>
      </Container>
    </div>
  );
  //END
};

export default Footer;
