import React from 'react';
import '../scss/Header.scss'
import TodoList from '../components/todoList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  return (
    <Router>
    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/home" className="navbar-brand">PhoneX</Link>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Phone</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Gear</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">Iphone</a>
              <a className="dropdown-item" href="#">Sam Sung</a>
              <a className="dropdown-item" href="#">Xiao Mi</a>
              <a className="dropdown-item" href="#">Oppo</a>
            </div>
          </li>
          <li className="nav-item">
          <Link to="/todoList" className="nav-link">TodoList</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-info my-2 my-sm-0 mr-4" type="submit">Search</button>
        </form> 
        <div className="cart mr-3">
            <i className="fas fa-shopping-cart "></i>
            <span className="numberCart">0</span>
        </div>       
      </div>
    </nav>
  </div>



         <Switch>

          <Route path="/todoList">
            <TodoList/>
          </Route>

        </Switch>






  </Router>
  );
}

export default Header;
