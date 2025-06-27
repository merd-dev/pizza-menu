import React from "react";
import ReactDom from 'react-dom/client';
import './index.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "starter/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "starter/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "starter/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "starter/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "starter/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "starter/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
  

function App(){
    return(
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

function Header(){
    return(
        <div className="header footer">
        <h1>Fast React Pizza CO.</h1>
        </div>
    )
}

function Menu(){
    return (
      <div className="menu">
        <h2>Our Menu</h2>
        
        <ul className="pizzas">
          {pizzaData.map((pizza)=>(<Pizza pizzaObj={pizza}/>))}
        </ul>
        {/* <Pizza name="Focaccia"
    ingredients= "Bread with italian olive oil and rosemary"
    price= '6'
    photoName= "starter/pizzas/focaccia.jpg"
    soldOut= 'false'/>
        <Pizza  name= "Pizza Margherita"
    ingredients= "Tomato and mozarella"
    price= '10'
    photoName= "starter/pizzas/margherita.jpg"
    soldOut= 'false' />
        <Pizza  name= "Pizza Spinaci"
    ingredients= "Tomato, mozarella, spinach, and ricotta cheese"
    price= '12'
    photoName= "starter/pizzas/spinaci.jpg"
    soldOut= 'false'/> */}
      </div>
    );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer(){
    const hour=new Date().getHours();
        const openHour=9;
        const closeHour=24;

        if(hour>=openHour && hour<=closeHour);else alert("we are closed")
    return(
        <div className="footer">
        {new Date().toLocaleString()}. We' are currently open!
        </div>
    )
}



const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
);