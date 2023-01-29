const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const newArray = new Array(...numbers1,...numbers2,...numbers3)

console.log(newArray)

const elements = numbers1.concat(numbers2).concat(numbers3);

console.log(elements)

console.log(numbers1)
numbers1.push(...numbers1, ...numbers2)
console.log(numbers1)