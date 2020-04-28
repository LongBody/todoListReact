import React, { Component } from 'react';
import TasKItems from '../components/TaskItems';
import '../scss/tableList.scss'
import { connect } from 'react-redux'
import * as actions from '../actions/index'




class TableList extends Component {

  constructor(props){
    super(props)
    this.state={
      filterName :'',
      filterStatus :"Show All"
    }
  }


  onChangeFilterName= (event)=>{
    let target =event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilterName(value);
    this.setState({
      [name] : value
    })
    
  }

  onChangeFilterStatus= (event)=>{
    let target =event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilterStatus(value);
    this.setState({
      [name] : value
    })
  }

render(){
    let {task ,filterName ,filterStatus ,keyword} =this.props;


    if(filterName){
      task =task.filter((item) => {
          return item.name.toLowerCase().indexOf(filterName) !== -1
      })
    }

    if(filterStatus){   
      if(filterStatus === "Active")
      task =task.filter((item) => {
          return item.status === true
      })
      else if(filterStatus === "Limit"){
          task =task.filter((item) => {
              return item.status === false || item.status === "false"
          })
      }
     }

     if(keyword){
      task = task.filter((item) => {
          let kw= keyword.keyword.toLowerCase();
          
          return item.name.toLowerCase().indexOf(kw) !== -1
      })
   }


    let listTasks=  task.map((task , index) =>{
      return <TasKItems 
        key ={task.id}
        index ={index+1}
         name ={task.name}
         status ={task.status}
         task ={task}
         >
         </TasKItems>
    })
  return (
 
<div>
  <table className="table table-bordered mt-3">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
        <th>Action</th>    
      </tr>
      <tr>
        <td scope="row" />
        <td>
          <input type="text" className="form-control" name="filterName" value ={filterName} onChange ={this.onChangeFilterName}/>
        </td>
        <td>
            <select className="form-control form-control" name="filterStatus" value ={filterStatus} onChange ={this.onChangeFilterStatus}>
                <option>Show all</option>
                <option>Active</option>
                <option>Limit</option>
            </select>
        </td>
        <td />
      </tr>
    </thead>
    <tbody>
      
      {listTasks}
     
    </tbody>
  </table>
</div>

  );
}
}




const mapStateToProps = (state) =>{
  return {
    task:state.task,
    filterName:state.filterName,
    filterStatus:state.filterStatus,
    keyword:state.searchingProduct
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFilterName: (name) => {
      dispatch(actions.filterName(name))
    },
    onFilterStatus: (status) => {
      dispatch(actions.filterStatus(status))
    }
  }
}



export default connect(mapStateToProps ,mapDispatchToProps)(TableList);
