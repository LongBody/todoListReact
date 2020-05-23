import React, { Component } from 'react';
import '../scss/Products.scss'
import ProductItems from '../components//productItems'
import { connect } from 'react-redux'
import * as actions from '../actions/index'




class Product extends Component {




render(){
  let {products , keyword} = this.props
console.log(products)
console.log(keyword)

  if(keyword){
    products = products.filter((item) => {
        let kw= keyword.toLowerCase();
        
        return item.name.toLowerCase().indexOf(kw) !== -1
    })
 }





  let elementProducts = products.map((pros,index )=>{
    return  <ProductItems
             key= {pros.id}
             id={pros.id}
             price ={pros.price}
             title ={pros.name}
             rate={pros.rating}
             imageProduct ={pros.imageProduct}
             >
            </ProductItems>
})
  return (
    <div className="container product-wrap">
    <div className="row"> 
    <div>
          {elementProducts}
       </div>
     </div>
  </div>
      

  );
}
}

const mapStateToProps = (state) =>{
  return {
    keyword:state.searchingNavbar
  }
};



export default connect(mapStateToProps , null )(Product);
