import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu !</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuision. 6 creative dishes to choose. All from our
            stone oven,all organic , all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.Please come back later </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        {" "}
        <h3> {pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "Sold out".toUpperCase() : pizzaObj.price}
        </span>
      </div>
    </li>
  );
}
function Footer() {
  //Components
  const hours = new Date().getHours();
  const openHrs = 1;
  const closingHrs = 24;
  const isOpen = hours >= openHrs && hours <= closingHrs;
  console.log(isOpen);

  if (!isOpen) {
    return (
      <p>
        We're happy to welcome you between {openHrs}:00 and {closingHrs}:00
      </p>
    );
  }

  return (
    // JSX
    <footer className="footer">
      {isOpen ? (
        <Order closingHrs={closingHrs} />
      ) : (
        <p>
          We're happy to welcome you between {openHrs}:00 and {closingHrs}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "The world is Open !!!");
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We are currently Open until {props.closingHrs}:00. Come visit us and
        order Online !!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
