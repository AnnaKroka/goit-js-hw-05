//-------------- TASK 1-1--------------------

// function makeTransaction(quantity, pricePerDroid) {
//     return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//-------------- TASK 1-2--------------------

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     let totalPrice = quantity * pricePerDroid;
//     if (totalPrice > customerCredits) {
//         return 'Insufficient funds!';
//     } else {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//-------------- TASK 1-3--------------------

// function slugify(title) {
//   const slug = title.toLowerCase().split(' ');
//   const slugNew = slug.join('-');
//     return slugNew;
// }
// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//-------------- TASK 1-4--------------------

function isEnoughCapacity(products, containerSize) {
 
  const valueProducts = Object.values(products);
  let totalProducts = 0;
  for (const value of valueProducts) {
    totalProducts += value;
  }
    if (totalProducts <= containerSize) {
      return true;
    } else {
      return false;
    }
  
}


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false