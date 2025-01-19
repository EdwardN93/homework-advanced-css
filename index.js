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
    photoName: "/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
console.log(window.outerHeight);
