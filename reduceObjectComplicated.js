const cart = [
  {
    type: "phone",
    name: "galaxy1",
    price: 300,
    amount: 2,
  },

  {
    type: "phone",
    name: "galaxyZ",
    price: 600,
    amount: 1,
  },

  {
    type: "phone",
    name: "appleshit",
    price: 1000,
    amount: 5,
  },

  //total 8 phones, costs $6200

  {
    type: "tablet",
    name: "tablet1",
    price: 900,
    amount: 2,
  },

  {
    type: "tablet",
    name: "tabletz",
    price: 300,
    amount: 2,
  },
];

//total 4 tablets, costs $2400

let {
  phoneTotalAmount,
  phoneTotalPrice,
  tabletTotalAmount,
  tabletTotalPrice,
} = cart.reduce(
  (total, cartItem) => {
    const { type, price, amount } = cartItem;
    if (type === "phone") {
      total.phoneTotalAmount += amount;
      total.phoneTotalPrice += amount * price;
    }

    if (type === "tablet") {
      total.tabletTotalAmount += amount;
      total.tabletTotalPrice += amount * price;
    }
    return total;
  },
  {
    phoneTotalAmount: 0,
    phoneTotalPrice: 0,
    tabletTotalAmount: 0,
    tabletTotalPrice: 0,
  }
);

console.log(
  `Total phones is ${phoneTotalAmount} and it costs $${phoneTotalPrice}`
);
console.log(
  `and for the tablets, the total amount is ${tabletTotalAmount} and the price of all the tablets is $${tabletTotalPrice}`
);
