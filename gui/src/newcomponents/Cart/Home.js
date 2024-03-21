import React from 'react';
import axios from 'axios'; 
import Itemcard from "./Itemcard";
import data from "./data";
import './Home.css'

const Home = () => {
    const sendProductData = async (item) => { 
        try {
            const response = await axios.post('/products', {
                img: item.img,
                title: item.title,
                desc: item.desc,
                price: item.price
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div> 
            <h1 className="text-center mt-3">All Items</h1>   
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => (
                        <Itemcard 
                            img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price} 
                            item={item} 
                            key={index}
                            sendProductData={() => sendProductData(item)} 
                        />
                    ))}
                </div>
            </section>
            

        </div>
                  
    );
};

export default Home;
