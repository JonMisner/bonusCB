

const arrayCompare = () => {

const array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
const array_two = ["dog", "goose", "kite", "meal", "laptop"]

for (i = 0; i < array_one.length; i++) {
   for (j = 0; j <array_two.length; j++) {
      if (array_one[i]===array_two[j]) {
         console.log(array_one[i]);
      }
   }
}
}

arrayCompare();

