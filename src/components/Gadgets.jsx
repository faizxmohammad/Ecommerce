import React, { useState } from 'react'
import './gadgets.css'
import LikeIcon from '../assests/images/like.png'
import sampleImage from '../assests/images/sample.webp'
import {gadgetsData} from '../Data'

function Gadgets() {
    let uniqueKey = '';
    

  return (
    <>
        <div className="gadgets">
            <h2>Todays deals</h2>
            <div className="button">
                <button>Gadgets</button>
            </div>
            <div className="gadgets__cards">
                {
                    gadgetsData.map((items) =>(
                        items.sectionItems.map ((item)=>(
                            item.sectionItems.map((product , index)=>(  
                                
                                <div className="card__wrapper" key={`${items.sectionName} - ${item.sectionName} - ${product.itemName} - ${index}`}>
                                    {/* <p>key = {`${items.sectionName} - ${item.sectionName} - ${product.itemName} - ${index}`}</p> */}
                                    <div className="cards" >
                                        {/* Like Icon */}
                                        <div className="favorite__icon">
                                            <img src={LikeIcon} alt="" />
                                        </div>
                                        {/* Product Image */}
                                        <div className="image">
                                            <img src={product.itemMainImage} alt="" />
                                        </div>
                                    </div>
                                    {/* Product name and price */}
                                    <div className="products">
                                            <div className="product__title">
                                                <h2>{product.itemName}</h2>
                                                <p>₹{product.itemPrice}</p>
                                            </div>
                                            <div className="product__desc">
                                                <p>{product.itemDescription}</p>
                                            </div>
                                             {/* Add rating here.. */}
                                            <div className="product__rating">
                                                <p>Rating: {product.itemRating.reduce((accumulator , currentValue) => accumulator + currentValue , 0)}</p>
                                            </div >
                                            <div className="cart__button">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                </div>
                            ))
                        ))
                
                    ))

                }
            </div>
        </div>
    </>
  )
}

export default Gadgets