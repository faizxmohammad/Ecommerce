import React, { useEffect } from 'react'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import Banner from './Banner'
import Footer from './Footer'
import Gadgets from './Gadgets'
import Items from './Items'
import Navbar from './Navbar'
// import Product from './components/Product'   

function Main() {
    const navigate = useNavigate();
    
    useEffect(()=>{
        navigate("/")
    },[])
  return (
    <>
    <Navbar/>
    <Banner/>
    <Items/>
    <Gadgets/>
    <Footer/>
    </>
  )
}

export default Main