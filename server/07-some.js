const numbers = [1, 2, 3, 5];

//evaluar si al menos uno de los numeros es par.
let eval = false;
for (let num of numbers) {
  if (num % 2 === 0) {
    eval = true;
    break; //La instruccion break rompe el for.
  }
}
console.log(eval);

let someEven = numbers.some((num) => num % 2 === 0);
console.log(someEven);

const dates = [
  {
    start: new Date(2021, 1, 1, 10),
    end: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    start: new Date(2021, 1, 1, 15),
    end: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    start: new Date(2021, 1, 1, 20),
    end: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

//VERIFICAR AGENDA LIBRE HACIENDO USO DE LA LIBRERIA date-fns

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const newAppointment = {
  start: new Date(2021, 1, 1, 10),
  end: new Date(2021, 1, 1, 10, 30),
};

const isOverlap = (newDate) => {
  return dates.some((date) => {
    const sobrepuesto = areIntervalsOverlapping(
        {
          ...newDate,
        },
        {
          start: date.start,
          end: date.end,
        });
    return sobrepuesto
  });
}

console.log(isOverlap(newAppointment))
