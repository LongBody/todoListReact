import React, { Component } from 'react';
import '../scss/Products.scss'
import Product from './Products';
import { connect } from 'react-redux'
import * as actions from '../actions/index'




class ProductItems extends Component {

  constructor(props){
    super(props)
    this.buyProduct = this.buyProduct.bind(this)
  }

  

  buyProduct(){
    alert("Product Name: "+this.props.title + "\nPrice: " + this.props.price + "VND")
  }
  addToCart =(e)=>{
  
    let product = {
      id: this.props.id,
      name: this.props.title,
      price: this.props.price,
      imageProduct: this.props.imageProduct,
      rating: this.props.rate,
      status: true
  }
  e.preventDefault();
  let quantity = 1
     this.props.addToCart(product,quantity)
   
  }

render(){

    
  return (

       <div className="col-lg-3 productCard ">
         <img src={this.props.imageProduct} className="img-fluid" />
         <div className="card-body">
           <h5 className="card-title title"> { this.props.title } </h5>
           {this.showRating(this.props.rate)}
           <p className="card-text">{ this.props.price } VND</p>
           <span className="d-flex">
           <a href="#" className="btn btn-primary btn-sm" onClick={ this.buyProduct } >Buy</a>
           <a href="#" className="btn btn-success ml-1 btn-sm" onClick={ this.addToCart}><i className="fas fa-shopping-cart mr-1"></i>Add to cart</a>
           </span>
         </div>
  
       </div>

       
 


  );
}
    showRating(rating) {
    let result =[];
    for (let index = 0; index < rating; index++) {
        result.push(<i className="fas fa-star" key={index}></i>)          
    }
    for (let index2 = 0; index2 < (5-rating); index2++) {
        result.push(<i className="far fa-star" key={index2+100} ></i>)          
    }
    return result
}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (product , quantity) => {
      dispatch(actions.addToCart(product,quantity))
    }
  }
}



export default connect(null,mapDispatchToProps)(ProductItems);
