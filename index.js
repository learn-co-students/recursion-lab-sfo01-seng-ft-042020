// function printString(string) {
//   return string.split("").forEach(letter => console.log(letter))
// }


function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let subString = string.substring(1, string.length);
    printString(subString);
  } else {
    return true;
  }
}

// function reversedString(string) {
//   return string.split("").reverse().join("")
// }

function reverseString(string) {
  if (string === "") {
    return ""
  } else {
    return reverseString(string.substring(1)) + string.charAt(0)
  }
}


// function isPalindrome(string) {
//   let reversed = string.split("").reverse().join("")
//   if (reversed === string) {
//     return true
//   } 
//   return false
// }

function isPalindrome(string) {
  if (string.length <= 1) {
    return true
  }
  let firstLetter = string[0]
  let lastLetter = string[string.length - 1]
  if (firstLetter === lastLetter) {
    let removeFirstAndLast = string.substring(1, string.length - 1);
    return isPalindrome(removeFirstAndLast)
  } else {
    return false
  }
}

// function addUpTo(array, index) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === index) {
//       return sum
//     } else {
//       sum = sum += array[i]
//     }
//   }
// }

function addUpTo(array, index) {
  if (index > 0) {
    return addUpTo(array, index - 1) + array[index]
  } else {
    return array[index]
  }
}

// function maxOf(array) {
//   let highest = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > highest) {
//       highest = array[i]
//     }
//   }
//   return highest
// }

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  }
  if (array[0] < array[1]) {
    array.splice(0,1)
  } else {
    array.splice(1,1)
  }

  return maxOf(array)
}

// function includesNumber(array, num) {
//   return array.includes(num)
// }
// function includesNumber(array, num) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === num) {
//       return true
//     }
//     return false
//   }
// }

function includesNumber(array, num) {
  if (array.length  === 0) {
    return false
  }

  if (array[0] === num) {
    return true
  } else {
    let newArray = array.slice(1)
    return includesNumber(newArray, num)
  }
}