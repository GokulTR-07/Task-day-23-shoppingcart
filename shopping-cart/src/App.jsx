import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {

  const [show,setShow] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
  const removeItemFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCart);
  };

  const isItemInCart = (item) => {
    return cartItems.includes(item);
  };


  return (
    <>
      <Navbar size={cartItems.length} setShow={setShow}/>
      <Header/>
      {
        show ? <Home addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} isItemInCart={isItemInCart}/> : <Cart cartItems={cartItems}/>
      }
    </>
  )
}

export default App
