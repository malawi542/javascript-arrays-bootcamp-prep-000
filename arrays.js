var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element);
 return array;
}


function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift();
 return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop();
 return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function removeElementFromEndOfArray(array) {
   var Nas = array.slice(0, array.length - 1);
   return Nas;
=======
function addElementToEndOfArray(array, element) {
  return [...array, element];
>>>>>>> c5fae0f10b8a456bc8c7fc91fd7541ce31551f97
}