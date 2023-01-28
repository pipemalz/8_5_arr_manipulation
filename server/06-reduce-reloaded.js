const items = [5, 6, 7, 6, 5, 7, 7, 8];

//Aca vemos como darle mayor uso al segundo argumento que recibe el metodo reduce, el valor inicial del acumulador seria un objeto al cual podemos agregarle propiedades.
const numCount = items.reduce((acc, num) => {
  if (!acc[num]) {
    acc[num] = 1;
  } else {
    acc[num]++;
  }
  return acc;
}, {});

console.log(numCount);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const levelCount = data
  .map((value) => value.level)
  .reduce((acc, value) => {
    if (!acc[value]) {
      acc[value] = 1;
    } else {
      acc[value]++;
    }
    return acc;
  }, {});

console.log(levelCount);
