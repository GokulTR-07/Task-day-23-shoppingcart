import React from 'react'
import list from '../Data'
import Card from './Card'
import Footer from './Footer'

function Home({addItemToCart,removeItemFromCart,isItemInCart}) {
  return (
    <>
    <section className=' py-5 bg-light'>
      <div className="container">
          <div className="row row-cols-2 row-cols-xl-4 row-cols-md-3 justify-content-center">
      {
        list.map((item)=>{
          return <Card item={item} key={item.id} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} isItemInCart={isItemInCart}/>
        })
      }
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home