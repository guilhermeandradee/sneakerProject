import './productsMain.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";




const ProductsMain = () => {
    return(
        <div className='productsmain-container'>
            <div className="productsmain-title">
                <h1>Populares</h1>
            </div>
            <main className='productsmain-main'>
                <div className='arrow-main'>
                    <IoIosArrowBack className='arrow-main '/>
                </div>

                <div className='item-product-main-container'>

                    <div className='item-product-main'>
                        
                        <div className='item-product-main-img-container' >

                            <div className='item-product-main-img' style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}>    
                            </div>
                            

                        </div>

                        <div className='item-product-main-description'>
                            <div className='price-main-container'>
                                <h1>R$ 58,99</h1>
                                <div className='price-main-promotion'>
                                    <FaArrowDown/> 16%
                                </div>
                            </div>
                            <p>Nike Dunk mummy branco limited edition plus plas bing</p>
                        </div>
                    </div>

                    

                    <div className='item-product-main'>
                        
                        <div className='item-product-main-img-container' >
                            <div className='item-product-main-img' style={{
                            backgroundImage: 'url(https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
                            }}>    
                            </div>

                            

                        </div>

                        <div className='item-product-main-description'>
                            <div className='price-main-container'>
                                <h1>R$ 58,99</h1>
                                <div className='price-main-promotion'>
                                    <FaArrowDown/> 16%
                                </div>
                            </div>
                            <p>Nike Dunk mummy branco limited edition</p>
                        </div>
                    </div>


                    


                    <div className='item-product-main'>
                        
                        <div className='item-product-main-img-container' >

                            <div className='item-product-main-img' style={{
                            backgroundImage: 'url(https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
                            }}>    
                            </div>
                            

                        </div>

                        <div className='item-product-main-description'>
                            <div className='price-main-container'>
                                <h1>R$ 58,99</h1>
                                <div className='price-main-promotion'>
                                    <FaArrowDown /> 16%
                                </div>
                            </div>
                            <p>Nike Dunk mummy branco limited edition</p>
                        </div>
                    </div>

                </div>

                <div >
                    <IoIosArrowForward className='arrow-main '/>
                </div>
            </main>
        </div>
    )
}

export default ProductsMain