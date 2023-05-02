import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(100);
  
  const increaseCount =() =>setCount(count + 1);


  // const increaseCount =() => {
  //       const newCount = count + 1;
  //       setCount(newCount);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase </button>
      
    </div>
  )
}


// function Counter(){
//   const abc = useState(0);
//   const [count, setCount] = userState(55);

//   const increaseCount =() => {
//     const newCount = count + 1;
//     setCount(newCount);
//   }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount} > </button>
      
//     </div>
//   )
// }


// function App() {
//   const products =[
//     {name:'computer', price:70000},
//     {name:'watch', price:9000},
//     {name:'laptop', price:756},
//     {name:'phone', price:44000},

//   ]
//   return (
//     <div className="App">
//       {
//         products.map(product=> <Product name={product.name} price={product.price}></Product>)
//       }
//       <Product name="computer" price="70000" brand="Hp"></Product>
//       <Product name= "phone" price="31000" brand=""></Product>
//       <Product name= "Laptop" price="75000" brand="Apple"></Product>
//       <Product name= "iPad" price="45000"></Product>
      
//     </div>
//   );
// }

// function Product(props){
//   return (
//     <div className="product">
//       <h2>Name: {props.name} </h2>
//       <p>Price:{props.price} </p>
//     </div>
//   )
// }  

export default App;
