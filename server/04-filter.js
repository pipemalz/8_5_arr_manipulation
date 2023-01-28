const words = ["spray", "elites", "limit", "apple", "exuberant"];

const newArr = [];
for (let word of words) {
  if (word.length > 6) {
    newArr.push(word);
  }
}
console.log("for: " + newArr);

const arrFiltered = words.filter((word) => word.length > 6);
console.log("metodo filter: " + arrFiltered);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

//Filtrar todas las ordenes de compra que fueron entregadas y cuyo total es mayor a 100.
const deliveredOrders = orders.filter(order => order.delivered && order.total > 100);
console.log(deliveredOrders);


function buscar(query){
    return orders.filter(order => order.customerName.includes(query));
}

console.log(buscar('le'))