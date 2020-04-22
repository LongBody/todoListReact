import React, { Component } from 'react';
import '../scss/tableList.scss'





class TasKItems extends Component {
  
  onUpdateStatus =() =>{
    this.props.onUpdateStatus(this.props.task.id)
  }

  onDeleteList = ()=>{
    this.props.onDeleteList(this.props.task.id)
  }

  onEditList = ()=>{
    this.props.onEditList(this.props.task.id)
  }

render(){
    
  return (
<tr>    

        <td scope="row">{this.props.index}</td>
        <td >{this.props.name}</td>
        <td className="CenterActiveLimit">
        <div role="alert" 
        className={this.props.status === true ?
         "badge badge-success fontSizeListActiveLimit " :
          "badge badge-danger fontSizeListActiveLimit"} 
        onClick ={this.onUpdateStatus}
          >
        {this.props.status === true ? "Active" : "Limit"}
       
       </div>
         
          </td>
        <td>
          <button type="button" className="btn btn-warning btn-sm mr-1" onClick={ this.onEditList }><i className="far fa-edit"></i> Edit</button>
          <button type="button" className="btn btn-danger btn-sm" onClick={ this.onDeleteList }><i className="far fa-trash-alt"></i> Delete</button>
        </td>
      </tr>

  );
}
}

export default TasKItems;
