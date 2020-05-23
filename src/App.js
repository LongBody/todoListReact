import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import Axios from 'axios';

class App extends Component  {


  render(){


  return (
    <div className="App">
      <Header/>      
      <Footer/>
    </div>
  
  );
 }
}

export default App;
