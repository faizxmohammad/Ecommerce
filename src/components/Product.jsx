import React, { useState } from 'react'
import './product.css'
import returnIcon from '../assests/images/rotate-left-solid.svg'
import truckIcon from '../assests/images/truck-solid.svg'
const Product = ({id}) => {
    const [count , setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1) 
    }
    const handleDecrement = () =>{
        if(count == 0) count = 0;
        setCount(count - 1)
    }
  return (
    <>
        <div className="product">
            {/* Left container */}
            <div className="product__left">
                <div className="top">
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_6aa6c302-2cfb-4e87-85f7-d67b6f149bf7_600x.png?v=1641980344" alt="" />
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

                    <h1 className="title">boAt Airdopes 131</h1>

                    <p className="desc">Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</p>

                    <div className="rating">
                        <p>Rating: {4.5}</p>
                        <p>({190})</p>
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
    </>
  )
}

export default Product