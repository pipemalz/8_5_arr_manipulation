// Tienes un array de números y tu reto es retornar la suma de todos los valores en él.

// Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada:

// numbers: Un array de números
// Dentro del cuerpo de la función calcSum debes escribir tu solución.

// Ejemplo 1:

const input = [1, 1, 1]
// Ouput: 3

function calcSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);    
}
  