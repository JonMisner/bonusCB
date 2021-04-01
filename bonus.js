// test arrays (if using node)
const array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
const array_two = ["dog", "goose", "kite", "meal", "laptop"]

// loops through each item in Arr2, while looping through arr1. if they match it console logs the item.
const arrayCompare = (arr1, arr2) => {

for (i = 0; i < arr1.length; i++) {
   for (j = 0; j <arr2.length; j++) {
      if (arr1[i]===arr2[j]) {
         console.log(arr1[i]);
      }
   }
}
}
// call
arrayCompare(array_one, array_two);

// export
module.exports = arrayCompare;

