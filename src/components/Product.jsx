import React, { Component, useContext, useState } from 'react'
import './product.css'
import returnIcon from '../assests/images/rotate-left-solid.svg'
import truckIcon from '../assests/images/truck-solid.svg'
import { uniqueKeyContext } from '../App'
import { gadgetsData } from '../Data'


const Product = () => {
    const [count , setCount] = useState(0);
    const {key} = useContext(uniqueKeyContext);
    const descriptionLength = 100;

    const handleIncrement = () => {
        setCount(count + 1) 
    }
    const handleDecrement = () =>{
       if(count > 0){
        setCount(count - 1)
       }
    }
    const getDescription = (text) =>{
        if(text.length <= descriptionLength){
            return text;
        }else{
            return text.slice(0, descriptionLength) + "...."
        }

    }
  return (
    <>
    {
        gadgetsData.map((items)=>(
            items.sectionItems.map((item)=>(
                item.sectionItems.map((products , index)=>(
                    key === `${items.sectionName} - ${item.sectionName} - ${products.itemName} - ${index}` &&
                
        <div className="product" key={key}>
            {/* Left container */}
            <div className="product__left">
                <div className="top">
                    <img src={products.itemMainImage} alt="" />
                </div>
                <div className="left__bottom">

                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI_1f060ff5-cbbf-43f3-b673-41e4aacc7d79_800x.jpg?v=1657869596" alt="" />
                        
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI_1f060ff5-cbbf-43f3-b673-41e4aacc7d79_800x.jpg?v=1657869596" alt="" />

                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI_1f060ff5-cbbf-43f3-b673-41e4aacc7d79_800x.jpg?v=16578695960" alt="" />

                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI_1f060ff5-cbbf-43f3-b673-41e4aacc7d79_800x.jpg?v=1657869596" alt="" />



                    </div>
            </div>

            {/* Right container */}

            <div className="product__right">
                <div className="right__top">

                    <h1 className="title">{products.itemName}</h1>

                    <p className="desc">{getDescription(products.itemDescription)}</p>
                

                    <div className="rating">
                        <p>Rating: {products.itemRating.reduce((accumulator , currentValue) => accumulator + currentValue , 0)}</p>
                        <p>Reviews: ({products.itemReviewCount})</p>
                    </div>
                </div>
                <hr />




                <div className="right__between">
                <h1 className="price">$999.00 or 167/month</h1>
                <p>Suggested payments with 6months special financing</p>
                </div>
                <hr />

                <div className="right__bottom">
                    <p>Choose a color</p>
                    <div className="colors">
                        <div className="color"></div>
                        <div className="color"></div>
                        <div className="color"></div>
                        <div className="color"></div>
                        <div className="color"></div>
                      
                        <div className="color"></div>
                    </div>
                </div>
                <hr />

                
            <div className="product__right__bottom">
                <div className="top">
                    <div className="button">
                       <button className="decrement" onClick={handleDecrement}>-</button>
                       <p>{count}</p>
                       <button className="increment" onClick={handleIncrement}>+</button>
                    
                    </div>
                    <div className="itemsLeft">
                        <p>Only {13} Left! Don't miss it</p>
                    </div>
                </div>
                <div className="middle">
                    <button className="buy">Buy Now</button>
                    <button className="addToCart">Add to Cart</button>
                </div>
                
                <div className="bottom">
                    <div className="bottom__top">
                        <div className="delivery">
                            <img src={truckIcon} alt="" />
                            <h3>Free Delivery</h3>
                        </div>
                        <p>Enter your Postal code for Delivery Availability</p>
                    </div>


                    
                    <div className="bottom__bottom">

                    <div className="return">
                            <img src={returnIcon} alt="" />
                            <h3>Return Delivery</h3>
                        </div>
                        <p>Free 30days Delivery Returns. <p className="details">Details</p></p>

                    </div>
                </div>
            </div>

            </div>
           
        </div>
                      ))
                      ))
                  ))
              }
              
    </>
  )
}

export default Product


