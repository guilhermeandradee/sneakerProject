import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import ProductPurchase from "./pages/ProductPurchase.jsx";
import { useLocation } from 'react-router-dom';

const MainRoutes = () => {

    const location = useLocation();
    const { product } = location.state || {};

    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/productpurchase/:productName" element={<ProductPurchase/>} />
            
        
        </Routes>
    )
}

export default MainRoutes