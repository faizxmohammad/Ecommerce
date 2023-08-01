
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Gadgets from './components/Gadgets'
import Items from './components/Items'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Main from './components/Main'
import Products from './components/Products'
import { createContext, useState } from 'react'

export const uniqueKeyContext = createContext();
export const productIdContext = createContext();
function App() {

  const [key , setKey] = useState('');
  const [productRouteId , setProductRouteId] = useState('')
  return (
    <>
   <uniqueKeyContext.Provider value={{key,setKey}}>
    <productIdContext.Provider value={{productRouteId , setProductRouteId}}>
    <Router>
      <Routes>

        <Route exact path='/' element={<Main/>}/>
        <Route path={`/Product/*`} element={<Products/>}/>
        
      </Routes>
    </Router>
    </productIdContext.Provider>
    </uniqueKeyContext.Provider>




    {/* <Navbar/>
    <Product/>
    <Items/>
    <Gadgets/>
    <Footer/> */}
    
    </>
  )
}

export default App
