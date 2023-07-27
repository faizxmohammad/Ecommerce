import React from 'react'
import './footer.css'
import Logo from '../assests/images/logo.jpg'
import PaymentMethods from '../assests/images/payment_methods.jpg'
import BreifCaseIcon from '../assests/images/briefcase.png'
import GiftCardIcon from '../assests/images/gift-card.png'
import QuestionIcon from '../assests/images/question.png'
function Footer() {
  return (
    <>
        <div className="footer">
           <hr></hr>
           <div className="footer__wrapper">
            <div className="wrapper__left">
                <div className="first">
                    <img src={Logo} alt="" className='logo' />
                    <h1 className='title'>Ecommerce</h1>
                </div>
                <div className="second">
                    <p>If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.</p>
                </div>
                <div className="third">
                    <img src={PaymentMethods} alt="" />
                </div>
            </div>
            <div className="wrapper__right">
                <div className="wrapper__right__first">
                    <h1>Department</h1>
                    <li>Fashion</li>
                    <li>Education Product</li>
                    <li>Frozen Food</li>
                    <li>Beverages</li>
                    <li>Organic Grocery</li>
                    <li>Office Supplies</li>
                    <li>Beauty Products</li>
                    <li>Electronic & Gadget</li>
                    <li>Tv Accessories</li>
                    <li>Fitness</li>
                    <li>Sneakers</li>
                    <li>Toys</li>
                    <li>Furniture</li>
                </div>
                <div className="wrapper__right__second">
                    <h1>About Us</h1>
                    <li>About Ecommerce</li>
                    <li>Careers</li>
                    <li>News & Blog</li>
                    <li>Help</li>
                    <li>Press Center</li>
                    <li>Shop By Location </li>
                    <li>Ecommerce Brands</li>
                    <li>Affiliate & Partners</li>
                </div>
                <div className="wrapper__right__third">
                    <h1>Services</h1>
                    <li>Gift Card</li>
                    <li>Mobile App</li>
                    <li>Shipping And Delivery</li>
                    <li>Order Pickup</li>
                    <li>Account Signup</li>
                </div>
                <div className="wrapper__right__fourth">
                    <h1>Help</h1>
                    <li>Ecommerce help</li>
                    <li>Returns </li>
                    <li>Track Orders</li>
                    <li>Contact Us</li>
                    <li>Feedback</li>
                    <li>Security & Fraud </li>
                </div>
            </div>

           </div>
           <hr></hr>
           <div className="footer__bottom">
            <div className="bottom__wrapper">

                <div className="seller">
                    <img src={BreifCaseIcon} alt="" />
                    <p>Become Seller</p>
                </div>
                <div className="giftcard">
                    <img src={GiftCardIcon} alt="" />
                    <p>Gift Cards</p>
                </div>
                <div className="help-center">
                    <img src={QuestionIcon} alt="" />
                    <p>Help Center</p>
                </div>
                <p>Terms of Service</p>
                <p>Privacy & Policy</p>
                <p>All Right reserved by Mohammed Faiz | 2023</p>
            </div>
           </div>
        </div>

    </>
  )
}

export default Footer