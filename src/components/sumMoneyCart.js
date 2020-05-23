import React, { Component } from 'react'

class CartItems extends Component  {



  render(){
    let {cart} = this.props


  return (
<tfoot>
          <tr >
            <td colSpan={3} />
            <td>
              <h4>
                <strong>Tổng Tiền</strong>
              </h4>
            </td>
            <td>
              <h4>
                <strong>{this.calculateTotalCart(cart)}</strong>
              </h4>
            </td>
            <td colSpan={3}>
              <button type="button" className="btn btn-primary waves-effect waves-light">Thanh Toán
                <i className="fa fa-angle-right right ml-1" />
              </button>
            </td>
          </tr>
          </tfoot>
  );
 }


 calculateTotalCart = (cart) =>{

     let total = 0;
     if(cart.length > 0){
         cart.map(item =>{
            let priceParse = parseFloat(item.product.price)
             total +=priceParse* item.quantity
              total = Math.round(total * 1000)/1000
         })
     }
     return total
 }
}

export default CartItems;


