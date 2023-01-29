const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [
    [10, 11, 12],
    [13, 14, 15],
  ],
];

const newArr = [];
for(let value of matrix){
    for(let val of value){
        if(Array.isArray(val)){
            for(let val2 of val){
                newArr.push(val2)
            }
        }else{
            newArr.push(val)
        }
    }
}
console.log(newArr)

const aplanado = matrix.flat(2);//Recibe como argumento la profundidad entre los arrays internos
console.log(aplanado);
