'use strict';

// 1. countWords
function countWords(phrase) {
  
  const wordCounts = {};
  
  for (const word of phrase.split(' ')){
    // console.log(word)
    if (wordCounts.hasOwnProperty(word)){
      // console.log('has property!'); 
      wordCounts[word] += 1;
    } else {
      // console.log('new word!'); 
      wordCounts[word] = 1;
    }
    
  }
  console.log(wordCounts);
  
  return wordCounts; // this seems to be converted to a string by node??
  
}

console.log(`Test countWords : ${countWords('first first second third third third')}`)

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melonPrices = {
    2.50: ["Cantaloupe", "Honeydew"],
    2.95: ["Watermelon"],
    3.25: ["Musk", "Crenshaw"],
    14.25: ["Christmas"],
  }

  if (!melonPrices.hasOwnProperty(price)){ 
  // if(price != melonPrices){
    return null;
  }
  // const melon_array = melonPrices[price]
  // console.log(melon_array)
  return melonPrices[price].sort();
}

console.log(`Test melonPrices: ${getMelonsAtPrice(2.50)}`)
console.log(`Test melonPrices: ${getMelonsAtPrice(2.95)}`)
console.log(`Test melonPrices: ${getMelonsAtPrice(3.25)}`)
console.log(`Test melonPrices: ${getMelonsAtPrice(14.25)}`)
console.log(`Test melonPrices: ${getMelonsAtPrice(2.5)}`)
console.log(`Test melonPrices: ${getMelonsAtPrice(6)}`)