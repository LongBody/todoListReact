import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'


class SearchNavbar extends Component  {
    constructor(props){
        super(props)
        this.state = {
          keyword :''
        }
      }

      onChangeSearchNavbar = (event)=>{
        let target = event.target;
        let name = target.name;
        let value =target.value;
        console.log(value)
        this.setState({
          [name] : value
        })
      }

      onSearchingNavBar= (event) =>{
        event.preventDefault();   
        console.log(this.state.keyword)
        this.props.onSearchingNavBar(this.state.keyword)  
      }

      keyPressed =(event)=>{

        if (event.charCode === 13) {
          event.preventDefault();
          console.log(this.state.keyword)
          this.props.onSearchingNavBar(this.state.keyword) 
        } 
      }
    
    


  render(){
    let { keyword } =this.state
  return (
    <form className="form-inline active-cyan-4">
    <input className="form-control form-control-sm mr-1 w-75" type="text" placeholder="Search"
      aria-label="Search" 
      name="keyword" 
      value ={ keyword }
       onChange={ this.onChangeSearchNavbar }
       onKeyPress={ this.keyPressed }
      />
      <button className="btn btn-search-nav btn-sm"  onClick={this.onSearchingNavBar}> <i className="fas fa-search" aria-hidden="true" ></i></button>
  </form>
  
  );
 }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onSearchingNavBar: (keyword) => {
        dispatch(actions.searchingNavBar(keyword))
      }
    }
  }
  


export default connect(null ,mapDispatchToProps)(SearchNavbar);


