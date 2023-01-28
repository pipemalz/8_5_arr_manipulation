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

console.log(orders.map((item) => item.total));

//Retornar un nuevo array sin modificar el original
const orders2 = orders.map((item) => {
  return {
    ...item,
    tax : .19
  };
});

console.log(orders2)

console.log(orders)