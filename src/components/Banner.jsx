import React from 'react'
import './banner.css'

function Banner() {
  return (
    <>
        <div className="banner">
            <div className="banner__title">
                <h1>Shopping And <br/>Department Store.</h1>
            </div>
            <div className="banner__desc">
                <p>Shopping is a bit of a relaxing hobby for me, which is 
                sometimes troubling for the bank balance.</p>
            </div>

            <div className="banner__button">
                <button>Learn More</button>
            </div>

        </div>
    </>
  )
}

export default Banner