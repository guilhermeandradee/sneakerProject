import MainProductPurchase from "../components/MainProductPurchase"
import Header from "../components/header"
import './ProductPurchase.css'
import { useParams } from 'react-router-dom';

const ProductPurchase = () => {

    const { productName } = useParams();
    console.log('category', productName);

    return(
        <div className="product-purchase-container">
            <Header/>
            <MainProductPurchase />
        </div>
    )
}

export default ProductPurchase