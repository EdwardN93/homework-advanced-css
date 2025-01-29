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

const modal = document.querySelector(".modal");
let currentActive = document.querySelector(".pizza.active");

let order = [];

window.addEventListener("load", function () {
  loadPizzas();
  setOpenOrClose();
  selectPizza();
  modalExit();
});

function loadPizzas() {
  const menu = document.querySelector(".pizzas");

  pizzaData.forEach((el) => {
    const html = `
    <li class="pizza ${el.soldOut ? "sold-out" : ""} ${el.name
      .split(" ")
      .slice(-1)
      .toString()}" data-name="${el.name}">
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

function selectPizza() {
  const pizzas = document.querySelectorAll(".pizza");
  let thanks = document.querySelector(".thanks-order");

  pizzas.forEach((pizza) => {
    pizza.addEventListener("click", () => {
      // if (pizza.classList.contains("sold-out")) {
      //   return;
      // }

      if (currentActive) currentActive.classList.remove("active");
      pizza.classList.add("active");
      currentActive = pizza;

      order.push(
        pizza.getAttribute("data-name").split(" ").slice(-1).toString()
      );

      if (order.length > 0) {
        order.pop(-1);
        thanks.innerHTML = getOrderedPizza(
          pizza.getAttribute("data-name").split(" ").slice(-1).toString()
        );
      }
    });
  });
}

function getOrderedPizza(pizza) {
  const orderBtn = document.querySelector(".btn");

  orderBtn.addEventListener("click", () => {
    let check = document.querySelector(".pizza.active");

    if (!check) {
      return;
    } else {
      check.classList.remove("active");
    }
    modal.style.display = "block";
  });

  let thanksOrd = pizzaData
    .filter(function (e) {
      return e.name.includes(pizza);
    })
    .map(function (e) {
      if (!currentActive && order.length == 0) {
        return;
      }
      if (e.soldOut) {
        return "Oh No! Sold out! Chose another pizza";
      } else {
        return `Thank you for ordering our ${e.name}`;
      }
    })
    .toString();
  return thanksOrd;
}

function modalExit() {
  const modalClose = document.querySelector(".close");
  modalClose.addEventListener("click", function () {
    if (modal.style.display === "block") modal.style.display = "none";
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
