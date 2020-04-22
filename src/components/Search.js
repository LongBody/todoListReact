import React, { Component } from 'react';
import '../scss/searching.scss'



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

  onSearching= () =>{
    this.props.onSearch(this.state)   
  }

  keyPressed =(event)=>{

    if (event.charCode == 13) {
      event.preventDefault();
      this.props.onSearch(this.state) 
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
               <button className="btn-searching"><i className="fas fa-search" onClick={this.onSearching}/></button>
             
             <button type="button" className="btn btn-primary btn-sm ml-4">Arrange</button>        
           </form>        
       </div>

       
 


  );
}
}

export default Search;
