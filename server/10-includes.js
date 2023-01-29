const pets = [ "cat", "dog", "bat" ];

let result = false;
for(let pet of pets){
    if(pet === 'dog'){
        result = true;
        break;
    }
}
console.log(result);

console.log(pets.includes('dog'));