import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import ProductPurchase from "./pages/ProductPurchase.jsx";

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/productpurchase" element={<ProductPurchase />} />
            
        
        </Routes>
    )
}

export default MainRoutes