import React, { Component } from 'react';
import '../scss/taskForm.scss'



class TaskForm extends Component {

  constructor(props){
    super(props)
    this.state={
      id:'',
      name :'',
      status : true
    }
  }

componentWillMount(){
  let {taskEditing} =this.props
  if(taskEditing){
    this.setState({
      id:taskEditing.id,
      name:taskEditing.name,
      status:taskEditing.status
    })
  }
}

componentWillReceiveProps(nextProps){
  console.log(nextProps)
  if(nextProps && nextProps.taskEditing){
    let taskEditing = nextProps.taskEditing
    this.setState({
      id:taskEditing.id,
      name:taskEditing.name,
      status:taskEditing.status
    })
  }
  else if(!nextProps.taskEditing){
    this.setState({
      id:'',
      name :'',
      status : true
    })
  }

}

closeTaskForm = ()=>{
  this.props.closeTaskForm()
}

onChangeForm = async (event) =>{
  var target =event.target;
  var name= target.name;
  var value= target.value;

  this.setState({
    [name] :value
  })
  console.log(this.state)
  
}
  

onSubmitForm = (event)=>{
  event.preventDefault();
  this.props.onSubmitForm(this.state)
  this.closeTaskForm();
  this.OnClearForm();
}

OnClearForm = ()=>{
  this.setState({
    name : '',
    status:true
  })
}



render(){
  let {id} = this.state;
  
  return (

<div className="card">
  <div className="card-header">
  {id !== '' ? "Edit Product" : "Add Product"}
    <i className="fas fa-times-circle closeIcon" onClick={this.closeTaskForm} ></i>
  </div>
  <div className="card-body">
    <div className="form-group">
        <form onSubmit = {this.onSubmitForm}>
        <label>Name:</label>

      <input
         type="text"
         className="form-control"
         name ="name"
         value={this.state.name}
         onChange ={this.onChangeForm}
      />

      <label >Status:</label>
      <select className="form-control form-control" name="status" value={this.state.status} onChange ={this.onChangeForm}>
     <option value={true}>Active</option>
     <option value={false}>Limit</option>
     </select>
     <div className="mt-3">
     <button type="submit" className="btn btn-warning btn-sm">Save</button>
      <button type="button" className="btn btn-danger btn-sm ml-1" onClick ={this.OnClearForm}>Cancel</button>
     </div>
        </form>
     
    </div>
  </div>
</div>
  
  

       
 


  );
}
}

export default TaskForm;
