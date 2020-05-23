import React, { Component } from 'react';
import TaskForm from '../components/taskForm'
import Searching from '../components/Search'
import TableList from '../components/tableList'
import '../scss/todoList.scss'
import * as actions from '../actions/index'
import { connect } from 'react-redux'
import _ from 'lodash'


var randomstring = require("randomstring");

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state ={
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
  
    // openFormAdd = ()=>{
    //     this.props.onOpenForm()
    //   }


      openFormAdd= ()=>{
        if(this.props.isDisplayForm && this.props.taskEditing ===null){
            this.props.onOpenForm()
        }
        else {
            this.props.onOpenForm()
            this.props.onEditList(null)
        }
        
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
    var {keyword} =this.state
    var {isDisplayForm}= this.props
    
    


  return (

       <div className="container mb-2 todoList-wrap">
           <div className="row">
               <div className={isDisplayForm === true ? "col-lg-4" : ''}>
               <TaskForm />        
               </div>

               <div className={isDisplayForm ? "col-lg-8" : "col-lg-12"}>             
               <Searching onSearch ={ this.onSearch }/>
               <button type="button" className="btn btn-primary btn-sm mt-2" onClick={this.openFormAdd}>+ Add Product</button>
               <TableList/>    
               </div>
           </div>
           
       </div>

       
 


  );
}
}

const mapStateToProps = (state, ownProps) => {
    return {
      isDisplayForm: state.isDisplayForm,
      taskEditing: state.taskEditing
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onOpenForm: () => {
        dispatch(actions.openForm())
      },
      onEditList: (task) => {
        dispatch(actions.editList(task))
      }
   }
  }

export default connect(mapStateToProps , mapDispatchToProps)(TodoList);
