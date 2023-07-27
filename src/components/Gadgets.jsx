import React from 'react'
import './gadgets.css'
import LikeIcon from '../assests/images/like.png'
import sampleImage from '../assests/images/sample.webp'
import {gadgetsData} from '../Data'

function Gadgets() {
  return (
    <>
        <div className="gadgets">
            <h2>Todays deals</h2>
            <div className="button">
                <button>Gadgets</button>
            </div>
            <div className="gadgets__cards">
                {
                    gadgetsData.map((items) =>{
                        return items.sectionItems.map ( (item,index)=>(
                            item.sectionItems.map((product)=>(  
                <div className="card__wrapper">
                    <div className="cards">
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
                    <div className="products" key={index}>
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
                
            })

        }

                {/* above here */}
            </div>
        </div>
    </>
  )
}

export default Gadgets