const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
    { title: 'Hot Dog', price: 100, id: '🌭'}
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const pizza = products.find(product => product.title == 'Pizza');
if(pizza) {
    myProducts.push(pizza); //push es mutable
    products.splice(products.indexOf(pizza),1) //splice es mutable
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productsFilter = products.filter(product=> product.title !== 'Burger'); //Filter es inmutable

console.log("products", products);
console.log("productsFilter", productsFilter);

//Update