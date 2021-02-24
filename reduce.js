//Reduce is an ARRAY METHOD
//iterates, callback function
//reduces to a single value, can be anything - number, array, object
//1st arg: accumulator (total of all calculations)
//2nd arg: current - current iteration/value

const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100 },
  { name: "peter", age: 25, position: "designer", salary: 300 },
  { name: "susy", age: 30, position: "boss", salary: 400 },
  { name: "anna", age: 35, position: "intern", salary: 10 },
];

//VERY IMPORTANT: in the callback function we HAVE to return a TOTAL
const dailyTotal = staff.reduce((total, person) => {
  console.log(total);
  console.log(person.salary);
  total += person.salary;
  return total;
}, 0);

console.log(dailyTotal);
