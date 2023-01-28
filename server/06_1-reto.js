const items = [5, 6, 7, 6, 5, 7, 7, 8, 20, 10, 13, 11, 2, 4, 6, 8 , 19];

const rangos = items.reduce((acc, num) => {
    if(num <= 5){
        acc['1-5']++;
    }else if(num <= 10){
        acc['6-10']++;
    }else if(num <= 15){
        acc['11-15']++;
    }
    return acc;
},{
    '1-5':0,
    '6-10':0,
    '11-15':0
})

console.log(rangos)