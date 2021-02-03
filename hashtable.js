// A generic HashTable Implementation in JavaScript

// class HashTable {
//   constructor() {
//     this.table = new Array(137);
//     this.values = [];
//   }

// Defining the hashing function which allows a sting to be used as a key
// hash(string) {
//   const H = 37;
//   let total = 0;

//   for (var i = 0; i < string.length; i++) {
//     total += H * total + string.charCodeAt(i);
//   }
//   total %= this.table.length;
//   if (total < 1) {
//     this.table.length - 1;
//   }
//   return parseInt(total);
// }

//   showDistro() {
//     for (const key in this.table) {
//       if (this.table[key] !== undefined) {
//         console.log(key, " : ", this.table[key]);
//       }
//     }
//   }

//   put(data) {
//     const pos = this.hash(data);
//     this.table[pos] = data;
//   }

//   get(key) {
//     return this.table[this.hash(key)];
//   }
// }

// HashTable with Build Chains technique of collision-resolution.
// class HashTableChains extends HashTable {
//   constructor() {
//     super();
//     this.buildChains();
//   }
//   buildChains() {
//     for (var i = 0; i < this.table.length; i++) {
//       this.table[i] = new Array();
//     }
//   }

//   showDistro() {
//     for (const key in this.table) {
//       if (this.table[key][0] !== undefined) {
//         console.log(key, " : ", this.table[key]);
//       }
//     }
//   }

//   put(key, data) {
//     const pos = this.hash(key);
//     let index = 0;
//     if (this.table[pos][index] === undefined) {
//       this.table[pos][index] = data;
//     } else {
//       ++index;
//       while (this.table[pos][index] !== undefined) {
//         index++;
//       }
//       this.table[pos][index] = data;
//     }
//   }

//   get(key) {
//     const pos = this.hash(key);
//     let index = 0;
//     while (this.table[pos][index] != key) {
//       if (this.table[pos][index] !== undefined) {
//         return this.table[pos][index];
//       } else {
//         return undefined;
//       }
//       index++;
//     }
//   }
// }

// HashTable with Linear Probing technique of collision-resolution.
// class HashTableLinearP extends HashTable {
//   constructor() {
//     super();
//     this.values = new Array();
//   }

//   put(key, data) {
//     const pos = this.hash(key);
//     if (this.table[pos] === undefined) {
//       this.table[pos] = key;
//       this.values[pos] = data;
//     } else {
//       while (this.table[pos] !== undefined) {
//         pos++;
//       }
//       this.table[pos] = key;
//       this.values[pos] = data;
//     }
//   }

//   get(key) {
//     const hash = this.hash(key);
//     if (hash > -1) {
//       for (let i = hash; this.table[i] !== undefined; i++) {
//         if (this.table[i] === key) {
//           return this.values[i];
//         }
//       }
//     }
//     return undefined;
//   }

//   showDistro() {
//     for (const key in this.table) {
//       if (this.table[key] !== undefined) {
//         console.log(key, " : ", this.values[key]);
//       }
//     }
//   }
// }

// ----------------------------------------------------------

// Problem - Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

// Key points to solve this problem
// A> It is assumed that the characters are stored using 8 bit and there can be 256 possible characters.

// B> We will create a Hashmap with the charCodeAt number of the characters of the first string as keys and the number of occurances of the character as value; So, at the first occurance of the character increment, the value of the key by 1 and at the second occurance increment the value by another 1. Result, for each character, the no of occurance will be equal to that key's value' All the rest of the values of the Hashmap will be filled with zeros.

// Then go through the second string and for each character, look up the hash table for that key-value pair. And decrement the value by one, when that key is found the first time, and by another one, if the character occurs twice. If the two strings are permutations then they should have the same unique characters each with the same number of occurrences.

// So, none of the second for loop's if condition can have a negative value for a key, if the 2 strings are permutation of each other.

// C> Create a hash-table of size 256 (i.e. 256 elements) and initialize all values with 0's.

// D> With the for loop, for each character in str1, I am setting its "UTF-16 code unit" value (with charCodeAt method) as the key (incex position) for that hash_table.

// E> Compare the occurrence of each character, using the char value as index into an array of counts.

// Time Complexity of this solution : O(n) and  Space Complexity: O(1)
// ------------------------------------------
// function isPermutation(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   var hash_table_array = Array.apply(null, Array(256)).map(
//     Number.prototype.valueOf,
//     0
//   );

//   for (var i = 0; i < str1.length; i++) {
//     hash_table_array[str1[i].charCodeAt(0)] += 1;
//   }

//   for (var i = 0; i < str2.length; i++) {
//     if ((hash_table_array[str2[i].charCodeAt(0)] -= 1) < 0) {
//       return false;
//     }
//   }
//   return true;
// }
// ----------------------------------------------------------
// module.exports = isPermutation;

// console.log(isPermutation('asdf', 'fdsa')); // returns true
// console.log(isPermutation('asdf', 'fdsaa')); // returns false
// console.log(isPermutation('asdf', 'fdsf')); // returns false
// ---------------------------------------

// Implement a function to remove duplicates from an array and returning an array of only unique elements

// function uniqueArray(arr) {
//     var hashMap = {};
//     var uniqueArr = [];

//     for (var i = 0; i < arr.length; i++) {
//       if (!hashMap.hasOwnProperty(arr[i])) {
//         uniqueArr.push(arr[i]);
//         hashMap[arr[i]] = i;
//       }
//     }
//     return uniqueArr;
//   }

// test cases
//   var myArray = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
//   console.log(uniqueArray(myArray));
// Output >> [ 1, 2, 3, 5, 9, 8 ]
