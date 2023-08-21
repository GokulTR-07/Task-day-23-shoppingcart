import React from 'react'
import './Styles/Cart.css'

function Cart({cartItems}) {
  return (
    <section className=' py-5 bg-light'>
            <div className="container">
              <div className="row row-cols-2 row-cols-xl-4 row-cols-md-3 justify-content-center">
      { 
        cartItems.map((item)=>{
          return <div className='col' key={item.id}>
          <div className="card mb-5">
          <img src={item.img} className="card-img-top images" alt="" />
          <div className="card-body text-center">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">&#x20B9;{item.price}</p>
          </div>
        </div>
        </div>
        })
        }
       </div>
      </div>
    </section>
  )
}

export default Cart