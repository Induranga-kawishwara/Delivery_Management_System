import React, { useEffect, useState } from "react";
import axios from "axios";
import Itemcard from "./Itemcard";
// import data from "./data";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fuck");
      try {
        const response = await axios.get("http://localhost:5000/product");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <Itemcard
              data={item}
              // img={item.image}
              // title={item.name}
              // desc={" "}
              // price={item.shopPrice}
              // item={item}
              key={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
