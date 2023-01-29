// En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).

// Para solucionarlo vas a encontrar una función llamada parseToURL que recibe un parámetro de entrada:

// title: Un String con el título.
// Dentro del cuerpo de la función parseToURL debes escribir tu solución.

// Ejemplo 1:

const input = "La forma de correr Python";
// Output: "la-forma-de-correr-python"

function parseToURL(title) {
    return title.replaceAll(' ','-').toLowerCase();
}
console.log(parseToURL(input))
