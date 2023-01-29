const elements = ['Fire', 'Air', 'Water'];

const union = elements.join('--')

console.log(union)

const title = 'Curso de manipulacion de Arrays en JavaScript';
const newTitle = title.replaceAll(' ', '-')
console.log(newTitle)
console.log(newTitle.split('-'))
console.log(newTitle.split(/[-]|de|en/g))