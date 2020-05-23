import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from '../components/Products';
import PropTypes from 'prop-types';
import CallApi from '../utils/callApi'



class ProductContainer extends Component {


  constructor(props){
    super(props);
    this.state = {
      products : []
    };
  }
  

  componentDidMount(){
   CallApi("products").then((response) => {
      // handle success

      this.setState({
        products : response.data
      })
    
  })
  }

  
render(){
  

  let {products} = this.state


  return (

       <Products products={products}></Products>

  );
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}


ProductContainer.propTypes = {
  products : PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired,
      imageProduct:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired,
    })
  ).isRequired
}

export default connect(mapStateToProps,null)(ProductContainer);
