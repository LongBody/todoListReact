import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { MSG_UPDATE_CART, MSG_DELETE_PRODUCT_IN_CART} from '../constants/message'
import '../scss/Products.scss'

class CartItems extends Component  {



  render(){
let {item} = this.props;

  return (

        <tbody>
          <tr>
            <th scope="row">
              <img src={item.product.imageProduct} alt="" className="img-fluid z-depth-0 imageProduct" />
            </th>
            <td>
              <p>
                {item.product.name}
              </p>
            </td>
            <td>{item.product.price}</td>
            <td className="center-on-small-only">
              <span className="qty mr-1">{item.quantity}</span>
              <div className="btn-group radio-group" data-toggle="buttons">
                <label className="btn btn-sm btn-info
                                          btn-rounded waves-effect waves-light"
                                          onClick={ ()=> this.onUpdateQuantity(item.product,item.quantity -1 ,)}>
                  <a className="noneHover">—</a>
                </label>
                <label className="btn btn-sm btn-info
                                          btn-rounded waves-effect waves-light"
                                          onClick={ ()=> this.onUpdateQuantity(item.product,item.quantity+1)}> 
                  <a className="noneHover">+</a>
                </label>
              </div>
            </td>
            <td className="money">{this.sumTotalProduct(item.product.price , item.quantity)}$</td>
            <td>
              <button type="button" className="btn btn-sm btn-danger waves-effect waves-light" data-placement="top" title data-original-title="Remove item" title="Delete"
              onClick = {()=> this.deleteProductCart(item.product)}
              >
                 <i className="fa fa-trash none-hover" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
         
        </tbody>
  
  );


  
 }
 sumTotalProduct = (price , quantity)=>{
     let priceParse = parseFloat(price)
     let money = priceParse * quantity
     let sum = Math.round(money * 1000)/1000
    return sum
  }



  onUpdateQuantity =(product ,quantity)=>{
   if(quantity > 0){
     this.props.onUpdateQuantity(product,quantity)
     this.props.onUpdateMessage( MSG_UPDATE_CART)
   }
  }
 
  deleteProductCart(product){
      this.props.deleteProductCart(product)
      this.props.onUpdateMessage( MSG_DELETE_PRODUCT_IN_CART)
  }
  
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateQuantity: (product,quantity) => {
      dispatch(actions.onUpdateQuantity(product,quantity))
    },
    deleteProductCart: (product) => {
      dispatch(actions.deleteProductCart(product))
    },
    onUpdateMessage: (message) => {
      dispatch(actions.onUpdateMessage(message))
    },
  }
}

export default connect(null , mapDispatchToProps)(CartItems);


