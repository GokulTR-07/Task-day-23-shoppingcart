import React from 'react'
import './Styles/Cards.css'


function Card({item,addItemToCart,removeItemFromCart,isItemInCart}) {
  const {title,price,img} = item;
  return (
    
    <div className="col">
      <div className="card mb-5">
        <img src={img} className="card-img-top images" alt="Iphone13-Img" />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">&#x20B9;{price}</p>
          <div> 
            {isItemInCart(item) ? (
              <button className='btn btn-outline-dark' onClick={() => removeItemFromCart(item)}>Remove from Cart</button>
            ):(
              <button className='btn btn-outline-dark' onClick={() => addItemToCart(item)}>Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
        
  )
}

export default Card
