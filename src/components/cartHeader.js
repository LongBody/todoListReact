import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../scss/header.scss'


class CartHeader extends Component  {


  render(){
      let { cart } = this.props
      let quantity =0
       cart.map((item , index) =>{       
          quantity += item.quantity
      })

  return (
 
  <i className="fas fa-shopping-cart mr-1 ml-3 cart-nav"><span className="cart-nav-quantity">{quantity}</span></i> 
  
  );
 }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}



export default connect(mapStateToProps, null)(CartHeader);


