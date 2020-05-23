import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cart from '../components/cart';
import CartItems from '../components/cartItems';
import SumMoneyCart from '../components/sumMoneyCart';
import * as actions from '../actions/index'



class CartContainer extends Component {
 
render(){
    let { cart ,onUpdateQuantit}  = this.props

  return (

       <Cart>
           {this.showItemInCart(cart)}
           {this.showSumCart(cart)}
       </Cart>

  );
  
}
showItemInCart = (cart)=>{
    let result;
    if(cart.length > 0){
        result= cart.map((item , index) =>{
           return (
               <CartItems 
               key ={index}
               item = {item}
               index = {index}
               quantity ={item.quantity}
               >               
               </CartItems>
 
           )        
        })
    }
    return result
  }

  showSumCart = (cart)=>{
    let result
    if(cart.length > 0){
        result= <SumMoneyCart
            cart = {cart}
            >
            </SumMoneyCart>
 
    }
    return result
  }



}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps,null)(CartContainer);
