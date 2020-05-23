import React, { Component } from 'react';
import '../scss/searching.scss'
import { connect } from 'react-redux'
import * as actions from '../actions/index'




class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      keyword :''
    }
  }




  onChange = (event)=>{
    let target = event.target;
    let name = target.name;
    let value =target.value;
    this.setState({
      [name] : value
    })
  }

  onSearching= (event) =>{
    event.preventDefault();   
    this.props.onSearching(this.state)  
  }

  keyPressed =(event)=>{

    if (event.charCode === 13) {
      event.preventDefault();
      this.props.onSearching(this.state) 
    } 
 
  }


render(){
  let { keyword } =this.state
  return (

       <div>
           <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
             <input className="form-control form-control-sm w-75" type="text" placeholder="Search" aria-label="Search"
              name="keyword" 
              value ={ keyword }
               onChange={ this.onChange }
               onKeyPress={ this.keyPressed }
               />
               <i className="fas fa-search btn-searching ml-1" onClick={this.onSearching}></i> 
           </form>

              
       </div>

       
 


  );
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearching: (keyword) => {
      dispatch(actions.searchingProduct(keyword))
    }
  }
}


export default connect(mapStateToProps ,mapDispatchToProps)(Search);

