import React, { Component } from 'react';
import '../scss/tableList.scss'
import { connect } from 'react-redux'
import * as actions from '../actions/index'






class TasKItems extends Component {
  
  onUpdateStatus =() =>{
    this.props.onUpdateStatus(this.props.task.id)
  }

  onDeleteList = ()=>{
    this.props.onDeleteList(this.props.task.id)
  }

  onEditList = ()=>{
    this.props.onEditList(this.props.task)
    this.props.onOpenToggleForm();
  }

render(){
    
  return (
<tr>    

        <td scope="row">{this.props.index}</td>
        <td >{this.props.name}</td>
        <td className="CenterActiveLimit">
        <div role="alert" 
        className={this.props.status === true ?
         "badge badge-success fontSizeListActiveLimit hoverActive" :
          "badge badge-danger fontSizeListActiveLimit hoverLimit"} 
        onClick ={this.onUpdateStatus}
          >
        {this.props.status === true ? "Active" : "Limit"}
       
       </div>
         
          </td>
        <td>
          <button type="button" className="btn btn-warning btn-sm mr-1" onClick={ this.onEditList }><i className="far fa-edit noneHover"></i> Edit</button>
          <button type="button" className="btn btn-danger btn-sm" onClick={ this.onDeleteList }><i className="far fa-trash-alt noneHover"></i> Delete</button>
        </td>
      </tr>

  );
}
}
const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.task
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateState(id))
    },

    onDeleteList: (id) => {
      dispatch(actions.deleteList(id))
    },
    onOpenToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onEditList: (task) => {
      dispatch(actions.editList(task))
    }

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(TasKItems);
