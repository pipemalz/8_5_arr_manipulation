const letters = ['a', 'b', 'c', 'd'];

const newArr = [];
for(let letter of letters){
    newArr.push(letter + 0)
}
console.log(newArr)


//Map es inmutable, osea, no modifica el array original.
const anotherNewArray = letters.map(letter => letter + 0);
console.log(anotherNewArray)
console.log(letters)    