import React from 'react';
import './index.css';

class Items extends React.Component{
    constructor(props){            
      super(props)
      this.state={
        type:["Vegetables","fruits"],      
        name:["Spinach","Oranges","Onions"],  
        quantity:[30700,4000,5000]
      };
    }
    render(){
        return(
        <div className="main-div-holder">
          <h2>SHOP WITH US</h2>
          <div className="list-one">
            <p><li>Spinach</li>
               <img src="https://cdn.pixabay.com/photo/2016/01/19/17/36/green-vegetables-1149790__340.jpg"></img>
               <p><li>Product Name, {this.state.name[0]}</li>
                  <li>Type,{this.state.type[0]}</li>
                  <li>Quantity , {this.state.quantity[1]}</li>
                </p>
            </p>
            </div>
           <div className="combined">
        
            <p class="list-two">
              <li>Oranges</li>
              <img src="https://cdn.pixabay.com/photo/2017/01/20/15/12/orange-1995079__340.jpg"></img>
               <p><li>Product Name, {this.state.name[1]}</li>
                  <li>Type,{this.state.type[1]}</li>
                   <li>Quantity is, {this.state.quantity[1]}</li>
                   </p>
            </p>
             <p class="list-three">
                 <li >Onions</li>
                   <img src="https://cdn.pixabay.com/photo/2016/08/03/01/13/onion-1565604__340.jpg"></img>
                   <p><li>Product Name, {this.state.name[2]}</li>
                       <li>Type,{this.state.type[0]}</li>
                        <li>Quantity, {this.state.quantity[2]}</li> 
               </p> 
             </p>
             </div>
             
        </div>
        );
      }
    }
    export default Items;