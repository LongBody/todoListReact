import React from 'react';
import TodoList from '../components/todoList'
import CartHeader from '../components/cartHeader'
import ProductContainer from '../containers/ProductContainer'
import CartContainer from '../containers/CartContainer'
import SearchNavbar from './formSearchNavbar'
import  '../scss/header.scss'
import  '../scss/searching.scss'
import logo from '../image/phonexCollapse.png'
import Contact from '../components/contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  return (
    <Router>
<header className="header-wrap fixed-top" style={{backgroundColor:"#e3f2fd"}}>
  <nav className="navbar navbar-expand-sm navbar-light container" style={{backgroundColor:"#e3f2fd"}}>
  <Link to="/" className="navbar-brand active"><img src={logo} style={{width:130}}/></Link>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>

 
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav mr-auto mt-lg-0">
        <li className="nav-item active mb-auto">
        <Link to="/"className="nav-link ">Home</Link>
        </li>
        <li className="nav-item ">
          <Link to="/todoList" className="nav-link">StoreX</Link>
          </li>        
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Action 2</a>
        </div>
      </li>

      <li className="nav-item ">
          <Link to="/contact" className="nav-link">Contact</Link>
          </li>
    </ul>
    <SearchNavbar/>
    <Link to="/cart"><CartHeader/></Link>
  </div>
</nav>


</header>
          
          <Route path="/todoList"  component={TodoList}></Route>
          <Route path="/" exact><ProductContainer/></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/cart" component={CartContainer}></Route>

  </Router>
  );
}

export default Header;
