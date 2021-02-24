//Reduce - Objects

//cart example

const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 5,
  },

  {
    title: "Google Pixel",
    price: 499.99,
    amount: 5,
  },

  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },

  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

//we return an object instead of a single value.
//let { totalItems, cartTotal } is destructuring the total that is returned.
let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    //destructuring the cartItem, the amount and price property in the cartItem is what we want to work with.
    const { amount, price } = cartItem;
    //total number of items itself.
    total.totalItems += amount;
    //count the total cost of all the items together
    total.cartTotal += amount * price;
    //here total is an object, and we've already destructured the object on top, here we just set the properties of the object, totalItems and cartTotal, to whatever we want.
    return total;
  },
  {
    //right here is the object, and the SET initial values, totalItems, and cartTotal, both set to 0.
    totalItems: 0,
    cartTotal: 0,
  }
);

console.log(cartTotal);
cartTotal = parseFloat(cartTotal.toFixed(2));
// console.log(total);
console.log(totalItems, cartTotal);

//--------------    SECOND EXAMPLE ---------------

const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  //total, repo: repo represents each object in the array of 100 repos.
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }

    if (language) {
      total[language] = total[language] + 1 || 1;
    }

    return total;
  }, {});
  console.log(newData);
};

fetchRepos();
