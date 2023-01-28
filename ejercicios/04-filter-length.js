// Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

// Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

// array: Un array de strigs con palabras
// Dentro del cuerpo de la función filterByLength debes escribir tu solución.

// Ejemplo 1:

const input = ['amor', 'sol', 'piedra', 'día']
// Output: [ 'amor', 'piedra' ]

function filterByLength(array) {
   return array.filter(value => value.length >= 4);
}
  