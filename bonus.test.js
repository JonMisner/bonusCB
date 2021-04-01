// import function
const arrayCompare = require ("./bonus");

// set up test
test ("compares two arrays to find matching entries", () => {
   const array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
   const array_two = ["dog", "goose", "kite", "meal", "laptop"]

   expect(arrayCompare(array_one, array_two)).toEqual(
      console.log("dog"), 
      console.log("kite"), 
      console.log("laptop"))
})