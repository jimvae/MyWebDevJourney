const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
// 1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// 2 
basket.forEach(item => console.log(item));

// 3  for of
// Iterating, go one by one and look on those items 
// Iterables -> arraus, strings 
for (item of basket) {
    console.log(item);
}

// 4 - for in - loop over and see the object properties
// not iterating, we are enumerating
// properties of objects are Enumerable 
for (item in detailedBasket) {
    console.log(item);
//  -> outputs apples, oranges, grapes 
}

