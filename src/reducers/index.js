import { combineReducers } from "redux";
import task from './task';
import isDisplayForm from './isDisplayTaskForm';
import taskEditing from './EditTask';
import filterName from './FilterName';
import filterStatus from './filterStatus';
import searchingProduct from './searchingProduct';

const myReducer = combineReducers({
    task,
    isDisplayForm,
    taskEditing,
    filterName,
    filterStatus,
    searchingProduct

})

export default myReducer;