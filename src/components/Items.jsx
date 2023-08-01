import React from 'react'
import './items.css'
import likeIcon from '../assests/images/like.png'
import {data} from '../carouselData'


function Items() {
  return (
    <>
        <div className="items">
            <h1>Similar Items You Might Like</h1>
            <div className="items__carousel">
                <div className="items__containers">
                    {
                    data.map((items)=>{ 
                        return items.sectionItems.map((item , index)=>{
                            return (
                        <div className="card" key={`${items.sectionName} - ${index} `}>
                            {/* Printint Key */}
                            {/* <p>  key={`${items.sectionName} - ${index} `}</p> */}

                            <div className="favoriteContainer">
                                <img src={likeIcon} alt=""  className='likeIcon'/>
                            </div>
                            <div className="item_img">
                            <img src={item.itemMainImage} alt=""  className='item'/>
                            
                            </div>
                            <p className='item__name'>{item.itemName}</p>
                        </div>
                        
                            )
                    })
                    })
                    }

                </div>
            </div>
        </div>
    </>
  )
}

export default Items