import React, { Component } from 'react';
import TaskForm from '../components/taskForm'
import Searching from '../components/Search'
import TableList from '../components/tableList'
import _ from 'lodash'


var randomstring = require("randomstring");

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state ={
            task :[],
            isDisplayFormAdd :false,
            taskEditing :null,
            filterName : '',
            filterStatus : "Show All",
            keyword :''
        }
    }
    componentWillMount(){

        if(localStorage && localStorage.getItem("tasks")){
            var tasks =JSON.parse(localStorage.getItem("tasks"));
            this.setState(
                {
                    task : tasks
                }
            )
        }
    }

   

    openFormAdd= ()=>{
        if(this.state.isDisplayFormAdd && this.state.taskEditing ===null){
            this.setState({
                isDisplayFormAdd :true,
                
            })
        }
        else {
            this.setState({
                isDisplayFormAdd :true,
                taskEditing:null
                
                              
            })
        }
        
    }

    closeTaskForm = ()=>{
        this.setState({
            isDisplayFormAdd :false
        })
    }


    openTaskForm = ()=>{
        this.setState({
            isDisplayFormAdd :true
        })
    }


    onSubmitForm = async (data)=>{
        var {task} = this.state;     
       

        if(data.id === ''){
            data.id= await randomstring.generate(7);
            task.push(data);
        } else {
            var index = this.findIndex(data.id);
            task[index] = data
        }
         
       
        this.setState({
            task : task,
            taskEditing :null

        })
        console.log(task)
        localStorage.setItem("tasks" , JSON.stringify(task))
    }

    onUpdateStatus = (id)=>{
        let {task} =this.state ;
        let index =this.findIndex(id);
        if(index !== -1){
            task[index].status = ! task[index].status 
            this.setState({
                task:task
            })
        }
        localStorage.setItem("tasks",JSON.stringify(task))
    }

    onDeleteList = (id) =>{
        console.log(id)
        let {task} =this.state ;
        let index =this.findIndex(id);
        if(index !== -1){
            task.splice(index ,1)
            this.setState({
                task:task
            })
        }
        localStorage.setItem("tasks",JSON.stringify(task))
        this.closeTaskForm();
    }
    onEditList = (id) =>{
        console.log(id)
        let {task} =this.state ;
        let index =this.findIndex(id);
        let taskEditing = task[index] ;
        this.setState({
            taskEditing : taskEditing
        })
        this.openTaskForm();
    }

    onFilterName = (name)=>{
        this.setState({
            filterName:name.toLowerCase()
        })
    }

    onFilterStatus = (status)=>{
        this.setState({
            filterStatus:status
        })
    }
    onSearch =(keyword)=>{
        this.setState({
            keyword:keyword
        })
    }

    findIndex=(id) =>{
        let result = -1;
        let {task} = this.state;
        task.forEach((task ,index) =>{
            if(task.id === id){
                return result = index
            }
        })
        return result;
    }

render(){
    var {task , isDisplayFormAdd ,taskEditing ,filterName ,filterStatus ,keyword} =this.state

    if(keyword){
        task = task.filter((item) => {
            let kw= keyword.keyword.toLowerCase();
            
            return item.name.toLowerCase().indexOf(kw) !== -1
        })
        console.log(task)
     }

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

    
     
    let checkFormAdd = isDisplayFormAdd  ? <TaskForm
                                             closeTaskForm={this.closeTaskForm}
                                             onSubmitForm = {this.onSubmitForm} 
                                             taskEditing ={taskEditing}                                           
                                             /> : ""
  return (

       <div className="container mt-3 mb-2">
           <div className="row">
               <div className="col-lg-4">
                {checkFormAdd}
               
               </div>
               <div className={isDisplayFormAdd ? "col-lg-8" : "col-lg-12"}>
               
               <Searching onSearch ={ this.onSearch }/>
               <button type="button" className="btn btn-primary btn-sm mt-2" onClick={this.openFormAdd}>+ Add Product</button> 
               <TableList taskList ={task}
                          onUpdateStatus = {this.onUpdateStatus}
                          onDeleteList={this.onDeleteList}
                          onEditList ={this.onEditList }
                          onFilterName ={this.onFilterName}
                          onFilterStatus ={this.onFilterStatus}
                           />    
               </div>
           </div>
           
       </div>

       
 


  );
}
}

export default TodoList;
