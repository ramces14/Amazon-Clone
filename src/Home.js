import React from 'react';
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg" 
            alt="" 
            />

            <div class="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />

                <Product 
                    id="12321342"
                    title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for phone-call and Alexa voice control, Black"
                    price={348.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SX679_.jpg"
                />
            </div>

            <div class="home__row">
                <Product 
                    id="12321343"
                    title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
                    price={349.99 }
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SX679_.jpg"
                />

                <Product 
                    id="12321341"
                    title="SAMSUNG 65-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65TU8000FXZA, 2020 Model)"
                    price={697.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
                />

                <Product 
                    id="12321341"
                    title="Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy"
                    price={599.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ejZABsMOL._AC_SL1500_.jpg"
                />
            </div>

            <div class="home__row">
                <Product 
                    id="12321341"
                    title="Bose SoundLink Color Bluetooth Speaker II - Soft Black"
                    price={129.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Xg3PvaiQL._AC_SL1161_.jpg"
                />       
            </div>
        </div>
    )
}

export default Home
