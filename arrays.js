'use strict';

// 1. printIndices
function printIndices(items) {

    for (const idx in items) {
      console.log(`${items[idx]} ${idx}`);
    }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = []
  for(const item in items){
    if(item % 2 == 0){
      result.push(items[item])
    }
  }
  return result
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b)
  let sortedNItems = sortedItems.slice(0, n)
  
  return sortedNItems.reverse()

}


console.log(printIndices([1,2,3,4,5]))

console.log(everyOtherItem([1,2,3,4,5]))

console.log(smallestNItems([1,2,3,4,5], 3))