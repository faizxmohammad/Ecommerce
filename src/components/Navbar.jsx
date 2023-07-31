import React, { useState } from 'react'
import menuIcon from '../assests/images/menu.png'
import Logo from '../assests/images/logo.jpg'
import SearchIcon from '../assests/images/searchIcon.png'
import AccountIcon from '../assests/images/account.png'
import CartIcon from '../assests/images/cart.png'

import './navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [menuIsClicked , setMenuIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () =>{
    setMenuIsClicked(!menuIsClicked);
    console.log(menuIsClicked);

  }
  const HomeClick = () =>{
    navigate('/')
  }
  return (
    <>
        <div className="navbar">
            <div className="navbar__left" onClick={HomeClick}>
            <img src={Logo} alt="menu"  className='menuIcon'/>
            <h3 className='logo'>Ecommerce</h3>
            </div>

            <div className="navbar__center">
                <li>Category</li>
                <li>Deals</li>
                <li>What's New</li>
                <li>Delivery</li>

                <div className="searchContainer">
                    <input type="text" className='search' placeholder='Search Product' />
                    <img src={SearchIcon} alt="search"  className='searchIcon'/>
                </div>
            </div>


            <div className="navbar__right" >
              <div className="accountContainer">
                <img src={AccountIcon} alt="my account" className='account' />
                <h3>Account</h3>
              </div>
              <div className="cartContainer">
                <img src={CartIcon} alt="cart" className='cart' />
                <h3>Cart</h3>
              </div>
            </div>

            <div className="navbar_menu">
              <img src={menuIcon} alt="menu bar" className='menu mobileOnly'  onClick={handleClick}/>
            </div>
      </div>
      <div className={`responsiveMenu ${menuIsClicked ? 'show' : ''}`}>
              <div className="list">
                <li>Category</li>
                <li>Deals</li>
                <li>What's New</li>
                <li>Delivery</li>
                <div className="searchContainer">
                    <input type="text" className='search' placeholder='Search Product' />
                    <img src={SearchIcon} alt="search"  className='searchIcon'/>
                </div>
                <div className="lastContainer">
                  <div className="accountContainer">
                    <img src={AccountIcon} alt="my account" className='account' />
                    <h3>Account</h3>
                  </div>
                  <div className="cartContainer">
                    <img src={CartIcon} alt="cart" className='cart' />
                    <h3>Cart</h3>
                  </div>
                </div>

              </div>
      </div>
    </>
  )
}

export default Navbar

