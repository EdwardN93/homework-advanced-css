"use strict";

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

window.addEventListener("load", function () {
  loadPizzas();
  setOpenOrClose();
});

function loadPizzas() {
  const menu = document.querySelector(".pizzas");

  pizzaData.forEach((el) => {
    const html = `
        <li class="pizza ${el.soldOut ? "sold-out" : ""}">
        <img src="${el.photoName}" alt="${el.photoName}" />
        <div>
        <h3>${el.name}</h3>
        <p>${el.ingredients}</p>
        <span>${el.soldOut ? "SOLD OUT" : el.price + "€"}</span>
        </div>
        </li>
        
        `;
    menu.insertAdjacentHTML("beforeend", html);
  });
}

function setOpenOrClose() {
  const order = document.querySelector(".order");
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const setOpenMessage = `
    <p>We're open from 12:00 to 22:00. Come visit us or order online</p>
    <button class="btn">Order</button>`;

  const setClosedMessage = `
    <p>
    We're happy to welcome you and take your order between ${openHour}:00 and ${closeHour}:00
    </p>`;

  isOpen
    ? order.insertAdjacentHTML("beforeend", setOpenMessage)
    : order.insertAdjacentHTML("beforeend", setClosedMessage);
}
