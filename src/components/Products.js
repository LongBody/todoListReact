import React, { Component } from 'react';
import '../scss/Products.scss'


class Product extends Component {

  constructor(props){
    super(props)
    this.buyProduct = this.buyProduct.bind(this)
  }

  buyProduct(){
    alert("Product Name: "+this.props.title + "\nPrice: " + this.props.price + "VND")
  }

render(){
  return (

       <div className="col-lg-3 productCard ">
      
         <img src={this.props.imageProduct} className="img-fluid" />
         <div className="card-body">
           <h5 className="card-title title"> { this.props.title }</h5>
           <p className="card-text">{ this.props.price } VND</p>
           <a href="#" className="btn btn-primary" onClick={ this.buyProduct } >Buy</a>
           <a href="#" className="btn btn-success ml-1">Add to cart</a>
         </div>
  
       </div>

       
 


  );
}
}

export default Product;
