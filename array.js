// An Array is a collection of items. The items could be integers, strings, DVDs, games, books—anything really. The items are stored in neighboring (contiguous) memory locations.

const arrayNames = ['Daniel','Roy','Richard']
console.log(arrayNames)

// Arrays are zero-indexed 

console.log(`0 index ${arrayNames[0]} | 1 index ${arrayNames[1]} | 2 index ${arrayNames[2]} |`)

// The length of the array is the number of elements the array is storing at a particular point in time. So if an array has 10 elements, the first index will be 0 and the last one 9 (length - 1)

console.log(`Last name in the array is ${arrayNames[arrayNames.length - 1]}`)


// The push method adds to the end of an array
arrayNames.push('David')
console.log(arrayNames)

// The unshift method adds to the beginning of an array
arrayNames.unshift('Matt')
console.log(arrayNames)

// The splice method deletes from an array array.splice(start,deletCount)
arrayNames.splice(0,3)
console.log(arrayNames)

// For Loop prints out each element in the array
for(let i = 0; i < arrayNames.length; i++)
{
    console.log(arrayNames[i])
}

arrayNames.forEach((name,index) => {
    console.log(name + ' finished in ' + (index + 1))

})

function printStars(howMany){
    console.log("*".repeat(howMany));
  }
   
  [1,2,3,4,5].forEach(function(num){
    printStars(num)
  });


//   The split method allows us to separate a string into pieces and returns them as elements of a new array.

let phrase = "This is long enough for a string to count it words";

let words = phrase.split(" ");

console.log(words);
console.log(words[0]);
console.log(words.length);