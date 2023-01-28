const persons = [
  {
    id: 1,
    name: "Jacinto",
  },
  {
    id: 30,
    name: "Carla",
  },
  {
    id: 41,
    name: "Cassandra",
  },
  {
    id: 29,
    name: "Nacho",
  },
  {
    id: 50,
    name: "Jordi",
  },
  {
    id: 60,
    name: "Mia",
  },
];

function buscarPersona(id) {
  for (let person of persons) {
    if (person.id === id) {
      return person;
    }
  }
}
console.log(buscarPersona(29));

const result = persons.find((person) => person.id === 29);
console.log(result);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const busqueda = products.find(product => product.id === "🍔");
const busquedaIndex =products.findIndex(product => product.id === "🍔");
console.log(`Busqueda: ${busqueda.name}, Busqueda Index: ${busquedaIndex}`)

//Devolver el ultimo elemento.
console.log(products.at(-1))