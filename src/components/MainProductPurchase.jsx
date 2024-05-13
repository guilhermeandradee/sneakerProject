import { useState } from 'react'
import './MainProductPurchase.css'

const MainProductPurchase = () => {

    const [quantityCounter, setQuantityCounter] = useState(1)

    const addQuantityCounter = () => {
        setQuantityCounter(quantityCounter + 1)
    }
    const rmvQuantityCounter = () => {
        quantityCounter > 1 && setQuantityCounter(quantityCounter - 1)
    }
    


    return(
        <main className="main-container">

                <div className="purchase-img-products" >
                    <div className="purchase-img-product" style={{backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600)'}}>
                    </div>

                    <div className="purchase-img-product" style={{backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600)'}}>

                    </div>

                    <div className="purchase-img-product" style={{backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600)'}}>

                    </div>

                    <div className="purchase-img-product" style={{backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600)'}}>

                    </div>

                    <div className="purchase-img-product" style={{backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600)'}}>

                    </div>

                    <div className="purchase-img-product" style={{backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600)'}}>

                    </div>

                </div>

                <div className="purchase-description-products" >
                    <div className="description-container">
                        <h1 className="name-product-purchase">Nike Dunk Low Classic Cinza</h1>

                        <p className="price-product-purchase">R$ 899,00</p>

                        <p className="history-sneaker">Tênis Masculino Nike Dunk, criado para conforto e agilidade de jogadores de basquete, esse virou um tênis de destaque mundial.</p>
                    </div>

                    <div className="avaible-sizes">
                        <div className="avaible-size">39</div>
                        <div className="avaible-size">40</div>
                        <div className="avaible-size">41</div>
                        <div className="avaible-size">42</div>
                        <div className="avaible-size">43</div>
                        <div className="avaible-size">44</div>
                    </div>

                    <div className="quantity-container">
                        <p>Quantidade: </p>

                        <div className='input-container'>
                            <div onClick={rmvQuantityCounter} className='rmv-input-quantity'>
                                <p  >-</p>
                            </div>

                            <div className='quantity-input'> {quantityCounter} </div>

                            <div onClick={addQuantityCounter} className='add-input-quantity'>
                                <p  >+</p>
                            </div>
                        </div>
                    </div>

                    <p className="sneaker-code"></p>

                    <div className="buttons-purchase-container">
                        <button className='purchase-button' >Comprar</button>
                    </div>
                </div>

            </main>
    )
}

export default MainProductPurchase