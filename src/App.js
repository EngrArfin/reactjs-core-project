import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers(){
  const [users, setUsers] = useState([]);
  // useEffect( ()=>{}, [])

   useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json)
    .then(data => setUsers(data))
   }, [])
  return(
    <div>
      <h2>External Users </h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User> )
      }
    </div>
  )
}
function User(props){
  return(
    <div style={{border: '2px solid red', margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
// function Counter(){
//   const [count, setCount] = useState(100);
  
//   const increaseCount =() =>setCount(count + 1);
//   const decreaseCount =() =>setCount(count - 1);


  // const increaseCount =() => {
  //       const newCount = count + 1;
  //       setCount(newCount);
  // }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase </button>
//       <button onClick={decreaseCount}>Decrease </button>
      
//     </div>
//   )
// }


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
