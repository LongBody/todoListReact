import React, { Component } from 'react'
import Product from './components/Products'
import Header from './components/Header'


class App extends Component  {

  constructor(props){
    super(props)
    this.state ={
      isActive : true
    }
  };


  onChangeState = () =>{
    this.setState({
      isActive : !this.state.isActive,
    })
  }

  render(){

  let products =[
    {
      id:0,
      name:"Iphone 6",
      price:"6.990.000",
      imageProduct:"https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
      status:true
    },
    {
      id:1,
      name:"Iphone 7",
      price:"8.400.000",
      imageProduct:"https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg",
      status:true
    },
    {
      id:2,
      name:"XiaoMi Note 10",
      price:"12.599.000",
      imageProduct:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/11/8/637088187039672366_xiaomi-mi-note-10-1.png",
      status:true
    },
    {
      id:3,
      name:"Galaxy 20 Ultra",
      price:"21.900.000" ,
      imageProduct:"https://cdn.fptshop.com.vn/Uploads/Originals/2020/2/12/637170929984611739_ss-s20-xam-1.png",
      status:true
    },
    {
      id:4,
      name:"Galaxy Note 9",
      price:"23.690.000",
      imageProduct:"https://cdn.tgdd.vn/Products/Images/42/183507/samsung-galaxy-note-9-512gb-blue-600x600.jpg",
      status:true
    },
    {
      id:5,
      name:"Iphone 8",
      price:"9.999.000",
      imageProduct:"https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-600x600.jpg",
      status:true
    },
    {
      id:6,
      name:"Iphone XS",
      price:"19.900.000",
      imageProduct:"https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-600x600.jpg",
      status:true
    },
    {
      id:7,
      name:"XiaoMi Note 10",
      price:"23.799.000",
      imageProduct:"https://cdn.tgdd.vn/Products/Images/42/197228/huawei-p30-pro-1-600x600.jpg",
      status:true
    },

  ]

 


  let elementProducts = products.map((pros,index )=>{
      return  <Product 
               key= {pros.id}
               price ={pros.price}
               title ={pros.name}
               imageProduct ={pros.imageProduct}
               >
              </Product>
  })


  return (
    <div className="App">
      <Header/>

      <div className="container">
        <div className="row"> 
        {elementProducts}
         </div>
  <button type="button" className="btn btn-primary" onClick={this.onChangeState}> Click : {this.state.isActive === true ? "True" : "False" }</button>
      </div>

    </div>
  
  );
 }
}

export default App;
