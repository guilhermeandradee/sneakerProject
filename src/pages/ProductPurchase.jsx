import MainProductPurchase from "../components/MainProductPurchase"
import Header from "../components/header"
import './ProductPurchase.css'

const ProductPurchase = () => {
    return(
        <div className="product-purchase-container">
            <Header/>
            <MainProductPurchase/>
        </div>
    )
}

export default ProductPurchase