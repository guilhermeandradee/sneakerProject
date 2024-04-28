import './productsMain.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";



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
                        <div className='item-product-main-img-container' style={{
                            backgroundImage: 'url(https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-arte-padronizar-padrao-estrutura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
                        }}>
                            
                        </div>
                    </div>

                    <div className='item-product-main'>
                        a
                    </div>

                    <div className='item-product-main'>
                        a
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