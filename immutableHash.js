const mori = require('mori');

const o = mori.hashMap('a',1,'b',2);

const o2 = mori.assoc(o, 'a', 3);

console.log(o);
console.log(o2)

console.log(mori.get(o,'a'));
console.log(mori.get(o2,'a'));

const immutable = require('immutable');

const immO = immutable.Map({'a' : 1, 'b' : 2});

const immO2 = immO.set('a', 3);

console.log('immutable immO : ' + immO.get('a'));
console.log('immutable immO2 : ' + immO2.get('a'));

const person = {
    nombre : 'Maria',
    apellido : 'Gonzalez',
    cedula : 103342131
}

const personaNueva = (x = person) => {
    x.nombre = 'Carla';
    return x;
};

console.log(person)
console.log(personaNueva())