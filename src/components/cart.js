import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../scss/Products.scss'
import '../scss/cart.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Cart extends Component  {



  render(){
    let { children}  = this.props

  return (
    <div className="container cart-wrap" >
<h3>
<div className="card-header bg-dark text-light">
      <span className="badge amber darken-2 message-cart">{this.props.message}</span>
      <Link to='/' className="btn btn-success btn-sm pull-right cart-continueBuy">Tiếp tục mua sắm</Link>
      <div className="clearfix" />
    </div>
  </h3>
  {/* Cart */}
  <section className="section">
    <div className="table-responsive">
      <table className="table product-table">
        <thead>
          <tr>
            <th />
            <th>Sản Phẩm</th>
            <th>Giá</th>
            <th>Số Lượng</th>
            <th className="money">Tổng Cộng</th>
            <th />
          </tr>
        </thead>
     {children}
      </table>
    </div>
  </section>
    </div>

  
  );
 }
}

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.message
  }
}



export default connect(mapStateToProps, null)(Cart);


