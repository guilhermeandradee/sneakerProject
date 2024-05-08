import React, { useRef } from 'react';
import { useState } from 'react';

import './productsMain.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const ProductsMain = () => {

    const [isLoading, setIsLoading] = useState(false)

    const smallQuery = useMediaQuery({ maxWidth: 375 });
    const largeQuery = useMediaQuery({ minWidth: 678 });

    if(largeQuery){
        var useLargeQuery = true
        var useSmallQuery = false
    }

    if(smallQuery){
        var useSmallQuery = true
        var useLargeQuery = false
    }
    

    
    const itemsData = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: 'R$ 588,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 0
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 'R$ 512,00',
            description: 'Nike Air force branco limited edition collab Jhon Senna',
            index: 1
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 'R$ 109,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 2
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 'R$ 1.100,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 3
        },
        {
            id: 5,
            image: 'https://images.pexels.com/photos/9214280/pexels-photo-9214280.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 'R$ 101,00',
            description: 'Nike Air Jordan blue collab fit.co',
            index: 4
        },
        {
            id: 6,
            image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: 'R$ 58,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 5
        },
        {
            id: 7,
            image: 'https://media.istockphoto.com/id/1303978937/pt/foto/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?b=1&s=612x612&w=0&k=20&c=E-alCqbl6m0uzTcnDlQmkuXwkmHQyQy595K7jvGM7QU=',
            price: 'R$ 58,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 6
        },
        {
            id: 8,
            image: 'https://images.pexels.com/photos/2404959/pexels-photo-2404959.png?auto=compress&cs=tinysrgb&w=600',
            price: 'R$ 200,00',
            description: 'Nike Air force branco limited edition collab Jhon Senna',
            index: 7
        },
        {
            id: 9,
            image: 'https://images.pexels.com/photos/4490019/pexels-photo-4490019.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: 'R$ 58,99',
            description: 'Nike Dunk mummy branco limited edition plus plas bing',
            index: 8
        }
    ]
    
    
    const [numberItem1, setNumberItem1] = useState(0)
    const [numberItem2, setNumberItem2] = useState(1)
    const [numberItem3, setNumberItem3] = useState(2)
    
    const [seenItems, setSeenItems] = useState([
        
        itemsData[numberItem1],
        itemsData[numberItem2],
        itemsData[numberItem3]   
    ]) 

    const nextSeenItems = () => {
        setIsLoading(true)

        let newNumberItem1 = numberItem1 + 3;
        let newNumberItem2 = numberItem2 + 3;
        let newNumberItem3 = numberItem3 + 3;

        if (newNumberItem1 >= itemsData.length) {
            newNumberItem1 = 0;
        }
        if (newNumberItem2 >= itemsData.length) {
            newNumberItem2 = 1;
        }
        if (newNumberItem3 >= itemsData.length) {
            newNumberItem3 = 2;
        }

        setNumberItem1(newNumberItem1);
        setNumberItem2(newNumberItem2);
        setNumberItem3(newNumberItem3);

        setSeenItems([
            itemsData[newNumberItem1],
            itemsData[newNumberItem2],
            itemsData[newNumberItem3]
        ]);
        


        setIsLoading(false)
    }

    const prevSeenItems = () => {
        let newNumberItem1 = numberItem1 - 3;
        let newNumberItem2 = numberItem2 - 3;
        let newNumberItem3 = numberItem3 - 3;

        if (newNumberItem1 < 0) {
            newNumberItem1 = itemsData.length - 3;
        }
        if (newNumberItem2 < 1) {
            newNumberItem2 = itemsData.length - 2;
        }
        if (newNumberItem3 < 2) {
            newNumberItem3 = itemsData.length - 1;
        }


        setNumberItem1(newNumberItem1);
        setNumberItem2(newNumberItem2);
        setNumberItem3(newNumberItem3);

        setSeenItems([
            itemsData[newNumberItem1],
            itemsData[newNumberItem2],
            itemsData[newNumberItem3]
        ]);
    }
// Lógica do Carrossel para a tela pequena
 
    const [smallNumberItem1, setSmallNumberItem1] = useState(0)

    const [seenItemSmall, setSeenItemSmall] = useState([
        itemsData[smallNumberItem1]
    ])

    const nextSeenSmallItem = () => {
        let newNumberItem1 = smallNumberItem1 + 1;

        if (newNumberItem1 >= itemsData.length) {
            newNumberItem1 = 0;
        }

        setSmallNumberItem1(newNumberItem1);

        setSeenItemSmall([
            itemsData[newNumberItem1]
        ]);
    }

    const prevSeenSmallItem = () => {
        let newNumberItem1 = smallNumberItem1 - 1;

        if (newNumberItem1 < 0) {
            newNumberItem1 = itemsData.length - 1;
        }


        setSmallNumberItem1(newNumberItem1);

        setSeenItemSmall([
            itemsData[newNumberItem1]
        ]);
    }



  
    return(
        <div className='productsmain-container'>
            <div className="productsmain-title">
                <h1>Populares</h1>
            </div>
            <main className='productsmain-main'>
                <div className='arrow-main'>
                    <IoIosArrowBack onClick={smallQuery ? prevSeenSmallItem : prevSeenItems} className='arrow-main'/>
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

                    {largeQuery ? seenItems.map((product) => {
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
                    }) : seenItemSmall.map((product) => {
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
                    <IoIosArrowForward onClick={smallQuery ? nextSeenSmallItem : nextSeenItems} style={{
                        width: '100%',
                        height: '100%',
                    }} />
                </div>
            </main>
        </div>
    )
}

export default ProductsMain