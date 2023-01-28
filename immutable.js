//IMMUTABLE
const mori = require("mori");

const a = mori.vector(20, 50, 40);
const a2 = mori.conj(a, 3);

console.log(a)
console.log(mori.count(a))
console.log(mori.get(a2, 2))


const immutable = require('immutable');

const immA = immutable.List.of(1,2);
const immA2 = immA.push(3);
const immA3 = immA2.push({'Felipe' : 'Auxiliar de Sistemas de Informacion'})

console.log('immA size : ' + immA.size);
console.log('immA2 index 2 : ' + immA2.get(2))
console.log('immA2 size : ' + immA2.size)

console.log(immA3.get(3))



//MUTABLE
const mapa = new Map();
mapa.set('nombre', 'Juan');

const mapa2 = mapa.set('apellido', 'Jimenez')

console.log(mapa)

console.log(mapa2)