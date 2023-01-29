const libros = [50, 100, 150, 70, 250];
// let total = 0;
// for(let libro  of libros){
//     total += libro;
// }
// console.log(total) //620

// function sumaLibros(libros){

// }

function totalPaginas(libros){
    if(libros.length === 1){
        return libros[0]
    }
    return libros[0] + totalPaginas(libros.slice(1))
}


function factorial(x){
    if(x === 1){
        return 1
    }
    return x * factorial(x-1);
}

console.log(factorial(5));

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray = profundidad(matriz);

console.log(newArray);