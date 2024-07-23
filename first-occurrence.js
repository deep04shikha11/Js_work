// Find the Index of the First Occurrence in a String
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) {
    return -1;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

let haystack = "sadbutsad";
let needle = "sad";
console.log("First Occurrence Index=", strStr(haystack, needle));
