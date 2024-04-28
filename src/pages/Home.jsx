import React from "react";
import Header from "../components/header";
import ProductBar from "../components/ProductBar";
import ProductsMain from "../components/ProductsMain";
import './Home.css'

const Home = () => {
    return(
        <div className="home-container">
            <Header/>
            <ProductBar/>
            <ProductsMain/>
        </div>
    )
}

export default Home;