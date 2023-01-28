const numbers = [1, 30, 41, 29, 10, 13];

//EVALUAR SI TODOS LOS NUMEROS SON MENORES QUE 40
let eval = true;
for (let num of numbers) {
  if (num > 40) {
    eval = false;
  }
}
console.log(eval);

let menorQue40 = numbers.every((num) => num < 40);
console.log(menorQue40);

//EVALUAR QUE TODOS LOS MIEMBROS DE ESTE EQUIPO SEAN MENORES DE 15 AÑOS.
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const todosMenoresDe15 = team
  .map((member) => member.age)
  .every((age) => age < 15);

console.log(todosMenoresDe15)
