import { combineReducers } from "redux";
import task from './task';
import isDisplayForm from './isDisplayTaskForm';
import taskEditing from './EditTask';
import filterName from './FilterName';
import filterStatus from './filterStatus';
import searchingProduct from './searchingProduct';
import searchingNavbar from './seachingNavbar';
import products from './products';
import cart from './cart';
import message from './message';

const myReducer = combineReducers({
    task,
    isDisplayForm,
    taskEditing,
    filterName,
    filterStatus,
    searchingProduct,
    searchingNavbar,
    products,
    cart,
    message,

})

export default myReducer;