import React from "react";
import Header from "../components/header";
import ProductBar from "../components/ProductBar";
import ProductsMain from "../components/ProductsMain";
import './Home.css'
import Footer from "../components/Footer";

const Home = () => {
    return(
        <div className="home-container">
            <Header/>
            <ProductBar/>
            <ProductsMain/>
            <Footer/>
        </div>
    )
}

export default Home;