import React, { useRef } from 'react';
import { useState } from 'react';

import './productsMain.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

import Slider from "react-slick";




const ProductsMain = () => {

    const [isLoading, setIsLoading] = useState(false)

    const [numberItem1, setNumberItem1] = useState(0)
    const [numberItem2, setNumberItem2] = useState(1)
    const [numberItem3, setNumberItem3] = useState(2)

    const itemsData = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: 'R$ 58,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 0
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 'R$ 200,00',
            description: 'Nike Air force branco limited edition collab Jhon Senna',
            index: 1
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 'R$ 58,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 2
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 'R$ 58,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 0
        },
        {
            id: 5,
            image: 'https://images.pexels.com/photos/9214280/pexels-photo-9214280.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 'R$ 101,00',
            description: 'Nike Air Jordan blue collab fit.co',
            index: 1
        },
        {
            id: 6,
            image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: 'R$ 58,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 2
        },
        {
            id: 7,
            image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: 'R$ 58,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 0
        },
        {
            id: 8,
            image: 'https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 'R$ 200,00',
            description: 'Nike Air force branco limited edition collab Jhon Senna',
            index: 1
        },
        {
            id: 9,
            image: 'https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 'R$ 58,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 2
        }
    ]

    
    
    const [seenItems, setSeenItems] = useState([
        
            itemsData[numberItem1],
            itemsData[numberItem2],
            itemsData[numberItem3]   
    ]) 


    



    const nextSeenItems = () => {
        setIsLoading(true)

        setNumberItem1(numberItem1 + 3)
        setNumberItem2(numberItem2 + 3)
        setNumberItem3(numberItem3 + 3)

        setSeenItems([
            itemsData[numberItem1 + 3],
            itemsData[numberItem2 + 3],
            itemsData[numberItem3 + 3]   
        ])

        setIsLoading(false)

        console.log('clicked')
    }

    const prevSeenItems = () => {
        setIsLoading(true)

        setNumberItem1(numberItem1 - 3)
        setNumberItem2(numberItem2 - 3)
        setNumberItem3(numberItem3 - 3)

        setSeenItems([
            itemsData[numberItem1 - 3],
            itemsData[numberItem2 - 3],
            itemsData[numberItem3 - 3]   
        ])

        setIsLoading(false)

        console.log('clicked')
    }

    console.log(seenItems)
    

  
    return(
        <div className='productsmain-container'>
            <div className="productsmain-title">
                <h1>Populares</h1>
            </div>
            <main className='productsmain-main'>
                <div className='arrow-main'>
                    <IoIosArrowBack onClick={prevSeenItems} className='arrow-main'/>
                </div>

                <div className='item-product-main-container'>

                    {/* <div className='item-product-main'>
                        
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
                    </div> */}

                    { !isLoading && seenItems.map((product) => {
                        return(
                            <div className='item-product-main'>
                            
                            <div className='item-product-main-img-container' >
                                <div className='item-product-main-img' style={{
                                backgroundImage: `url(${product.image})`
                                }}>    
                                </div>

                            </div>

                            <div className='item-product-main-description'>
                                <div className='price-main-container'>
                                    <h1>{product.price}</h1>
                                    <div className='price-main-promotion'>
                                        <FaArrowDown/> 16%
                                    </div>
                                </div>
                                <p>{product.description}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>



                <div className='arrow-main' >
                    <IoIosArrowForward onClick={nextSeenItems} style={{
                        width: '100%',
                        height: '100%',
                    }} />
                </div>
            </main>
        </div>
    )
}

export default ProductsMain