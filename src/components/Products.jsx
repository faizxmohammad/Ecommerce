import React from 'react'
import Navbar from './Navbar'
import Items from './Items'
import Gadgets from './Gadgets'
import Footer from './Footer'
import Product from './Product'

function Products() {
  return (
    <>
        <Navbar/>
        <Product/>
        <Items/>
        <Gadgets/>
        <Footer/>
    </>
  )
}

export default Products