import React from 'react'
import './Styles/Navbar.css'

function Navbar({size, setShow}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container px-4 px-lg-5 ">
          <a className="navbar-brand shop-name" href="#" >Shopping Cart  <i className="fa fa-shopping-bag bag" aria-hidden="true"></i></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={()=>{setShow(true)}}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">All products</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Popular Items</a>
                  <a className="dropdown-item" href="#">New Arrivals</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-outline-light my-2 my-sm-0 cart" onClick={()=>{setShow(false)}}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>  Cart 
                <span className='cart-value'>{size}</span>
              </button>
            </form>
          </div>
        </div>
     </nav> 
  )
}

export default Navbar