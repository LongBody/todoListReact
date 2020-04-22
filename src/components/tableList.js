import React, { Component } from 'react';
import TasKItems from '../components/TaskItems';
import '../scss/tableList.scss'



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
    var task =this.props.taskList;
    let {filterName ,filterStatus } =this.state;
    let listTasks=  task.map((task , index) =>{
      return <TasKItems 
        key ={task.id}
        index ={index+1}
         name ={task.name}
         status ={task.status}
         task ={task}
         onUpdateStatus ={ this.props.onUpdateStatus }
         onDeleteList ={ this.props.onDeleteList }
         onEditList ={ this.props.onEditList }
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
    </thead>
    <tbody>
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
      {listTasks}
     
    </tbody>
  </table>
</div>

  

       
 


  );
}
}

export default TableList;
