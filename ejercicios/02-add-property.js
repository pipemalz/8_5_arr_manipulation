// Tienes un array de objetos que representan datos de productos con los siguientes atributos:

// name
// price
// stock
// Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

// Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

// Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

// array: Un array de objetos.
// Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

// Ejemplo:

const input = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
  },
  {
    name: "Product 3",
    price: 1650,
    stock: 4,
  }
];

function addNewAttr(array) {
    return array.map(value => {
        return {
            ...value,
            tax : Math.floor(value.price * .19)
        }
    })
}

console.log(addNewAttr(input))
console.log(input)