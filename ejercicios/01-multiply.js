// Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.

// Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:\

// array: Un array de números
// Dentro del cuerpo de la función multiplyElements debes escribir tu solución.

const input = [2, 4, 5, 6, 8];

function multiplyElements(array) {
    return array.map(value => value * 2)
 }
 
 console.log(multiplyElements(input))