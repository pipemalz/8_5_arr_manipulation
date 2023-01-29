const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort()) //Sort es mutable, organiza alfabeticamente de a cuerdo al codigo ASCII.

const numbers = [1, 30, 4, 21, 100000];
console.log(numbers.sort()) //Ordena los numeros de acuerdo a su codigo ASCII
console.log(numbers.sort((a, b)=> a - b)); //Ordena de menor a mayor
console.log(numbers.sort((a, b)=> b - a)); //Ordena de mayor a menor

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
console.log(words.sort());

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
console.log(orders.sort((a,b)=> a.total - b.total));

const listA = [1,2,3,4];

const sum = listA.reduce((acc, num) => acc + num);
console.log(sum)
console.log(listA)