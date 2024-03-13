import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import dish1 from "../../assets/image/thun.png";
import dish2 from "../../assets/image/thun.png";
import dish3 from "../../assets/image/thun.png";
import dish4 from "../../assets/image/kudu.png";
import dish5 from "../../assets/image/kudu.png";
import dish6 from "../../assets/image/kudu.png";
import dish7 from "../../assets/image/kali.png";
import dish8 from "../../assets/image/kali.png";
import dish9 from "../../assets/image/kali.png";
import dish10 from "../../assets/image/kaha.png";
import dish11 from "../../assets/image/kaha.png";
import dish12 from "../../assets/image/kaha.png";
import dish13 from "../../assets/image/gam.png";
import dish14 from "../../assets/image/gam.png";
import dish15 from "../../assets/image/gam.png";
import HeroThreeContent from "../SectionComponents/HeroThreeContent";

//Data objects to be used in the HeroThree section for rendering dishes information
const dummyListone = [
  {
    id: "d1",
    src: dish1,
    name: "Curry Powder 50G",
    price: 75,
  },

  {
    id: "d2",
    src: dish2,
    name: "Curry Powder 100G",
    price: 150,
  },

  {
    id: "d3",
    src: dish3,
    name: "Curry Powder 1KG",
    price: 1200,
  },
];

const dummyListtwo = [
  {
    id: "d4",
    src: dish4,
    name: "Chilli Powder 50G",
    price: 90,
  },

  {
    id: "d5",
    src: dish5,
    name: "Chilli Powder 100G",
    price: 180,
  },

  {
    id: "d6",
    src: dish6,
    name: "Chilli Powder 1KG",
    price: 1250,
  },
];

const dummyListthree = [
  {
    id: "d7",
    src: dish7,
    name: "Chilli Pieces 50G",
    price: 90,
  },

  {
    id: "d8",
    src: dish8,
    name: "Chilli Pieces 180G",
    price: 180,
  },

  {
    id: "d9",
    src: dish9,
    name: "Chilli Pieces 1KG",
    price: 1250,
  },
  
];

const dummyListfour = [
  {
    id: "d10",
    src: dish10,
    name: "Turmeric Powder 25G",
    price: 75,
  },

  {
    id: "d11",
    src: dish11,
    name: "Turmeric Powder 50G",
    price: 150,
  },

  {
    id: "d12",
    src: dish12,
    name: "Turmeric Powder 1KG",
    price: 1900,
  },
  
];

const dummyListfive = [
  {
    id: "d13",
    src: dish13,
    name: "Pepper Powder 25G",
    price: 85,
  },

  {
    id: "d14",
    src: dish14,
    name: "Pepper Powder 50G",
    price: 170,
  },

  {
    id: "d15",
    src: dish15 ,
    name: "Pepper Powder 1KG",
    price: 2500,
  },
  
];

//END

const HeroThreeSection = () => {
  //Mapping the data from the object above and storing them in a variable
  const dishList1 = dummyListone.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList2 = dummyListtwo.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList3 = dummyListthree.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList4 = dummyListfour.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList5 = dummyListfive.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  //END

  //Rendering the Hero Three section
  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{dishList1}</Row>

        <Row>{dishList2}</Row>
        <Row>{dishList3}</Row>
        <Row>{dishList4}</Row>
        <Row>{dishList5}</Row>

      </Container>
    </section>
  );
  //END
};

export default HeroThreeSection;
