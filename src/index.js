import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//This is the beginning of my react app//
class Products extends React.Component{
  constructor(props){            //constructor must contain super//
    super(props)
    this.state={
      type:["Vegetables","fruits"],     //state 
      name:["Spinach","Oranges","Onions"],  //get the elements from the array using index
      quantity:[30700,4000,5000]
    };
  }
  render(){
    return(
      <html>
      <body style={{padding:"20px",height:"90vh",width:"60vw",
               background:"grey",
               backgroundAttachment:"fixed",
               backgroundSize:"100%",
               margin:"0 auto" }}>
      <div style={{backgroundColor:"black",color:"white",padding:"30px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1 style={{backgroundColor:"black"}}>SHOP WITH US</h1>
        <p><li style={{fontSize:"25px",color:"white"}}>Spinach</li>
           <img src="https://cdn.pixabay.com/photo/2016/01/19/17/36/green-vegetables-1149790__340.jpg"></img>
           <p><li>Product Name, {this.state.name[0]}</li>
              <li>Type,{this.state.type[0]}</li>
              <li>Quantity , {this.state.quantity[1]}</li>
            </p>
        </p>
        <p>
          <li style={{fontSize:"25px",color:"white"}} >Oranges</li>
          <img src="https://cdn.pixabay.com/photo/2017/01/20/15/12/orange-1995079__340.jpg"></img>
           <p><li>Product Name, {this.state.name[1]}</li>
              <li>Type,{this.state.type[1]}</li>
               <li>Quantity is, {this.state.quantity[1]}</li>
               </p>
        </p>
         <p>
             <li style={{fontSize:"25px",color:"white"}} >Onions</li>
               <img src="https://cdn.pixabay.com/photo/2016/08/03/01/13/onion-1565604__340.jpg"></img>
               <p><li>Product Name, {this.state.name[2]}</li>
                   <li>Type,{this.state.type[0]}</li>
                    <li>Quantity, {this.state.quantity[2]}</li> 
           </p> 
         </p>
       </div>
       </body>
       </html>
    );
  }
}
ReactDOM.render(<Products/>,document.getElementById('root'));//has two arguments//

//Notes//
//Array,array indexing//
//components
//props
//state
