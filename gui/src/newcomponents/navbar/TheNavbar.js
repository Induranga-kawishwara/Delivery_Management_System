import React from "react";
import NavCartButton from "./NavCartButton";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import classes from "./TheNavbar.module.css";
import Logo from "../../assets/Logo/Logo.png";
import { Link as RouterLink } from "react-router-dom"

const TheNavbar = (props) => {
  //Layout and structure of the navbar to be passed to THENAV component
  return (
    <>
      <Navbar
        expand="xl"
        className={`${classes.navbar} fixed-top`}
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <Navbar.Brand className={classes.navbar_brand}>
          <RouterLink to="/" spy={true} smooth={true} offset={-50} duration={500}>
            <img src={Logo} alt="My logo" style={{ width: '200px', height: 'auto' }}></img>
          </RouterLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classes.toggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${classes.nav__linkgroup} ms-auto`}>
            <Nav.Link
              className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
            >
              <RouterLink
                activeClass={classes.active}
                to="/rider"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Rider
              </RouterLink>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to="why"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Lorry
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to="dishes"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Stores
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <RouterLink
                activeClass={classes.active}
                to="/productreg"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Reg Products
              </RouterLink>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <RouterLink
                activeClass={classes.active}
                to="/shopreg"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Reg Shops
              </RouterLink>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>

            
              <RouterLink
                activeClass={classes.active}
                to="/empreglog"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Register Employee
              </RouterLink>
            </Nav.Link>
            <Nav.Link href="#buttons" className={`${classes.nav__link}`}>
               <RouterLink
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
              <NavCartButton onClick={props.onShowCart} />
              </RouterLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
  //ENDS
};

export default TheNavbar;
