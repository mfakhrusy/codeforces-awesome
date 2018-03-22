// Little Chris is bored during his physics lessons (too easy), so he has built a toy box to keep himself occupied. The box is special, since it has the ability to change gravity.

// There are n columns of toy cubes in the box arranged in a line. The i-th column contains ai cubes. At first, the gravity in the box is pulling the cubes downwards. When Chris switches the gravity, it begins to pull all the cubes to the right side of the box. The figure shows the initial and final configurations of the cubes in the box: the cubes that have changed their position are highlighted with orange.

// Given the initial configuration of the toy cubes in the box, find the amounts of cubes in each of the n columns after the gravity switch!
// Input

// The first line of input contains an integer n (1 ≤ n ≤ 100), the number of the columns in the box. The next line contains n space-separated integer numbers. The i-th number ai (1 ≤ ai ≤ 100) denotes the number of cubes in the i-th column.
// Output

// Output n integer numbers separated by spaces, where the i-th number is the amount of cubes in the i-th column after the gravity switch.

var columns = readline();
var rawBox = readline().split(' ');

// put the box in big box
// first, check max height;
var maxHeight = rawBox.reduce(function(staticValue, currentValue) { // HEIGHT IS LENGTH, LENGTH IS HEIGHT!!!! IMPORTANT
  return Math.max(staticValue, currentValue);
});

// put them
var boxArray = [];
var columnArrayTemp = null;
var rawBoxTemp = null;
var i, j;
for (i = 0; i < columns; i++) {
  columnArrayTemp = [];
  rawBoxTemp = rawBox[i];
  for (j = 0; j < maxHeight; j++) {
    if (rawBoxTemp > 0) {
      columnArrayTemp.push(1);
      rawBoxTemp--;
    } else {
      columnArrayTemp.push(0);
    }
  }
  boxArray.push(columnArrayTemp);
}

// again, height here -> x axis (actual window length, but named height for convention and ease of use)
var boxArrayHeight = maxHeight;
var boxArrayLength = boxArray.length;
var boxRow = [];

for (j = 0; j < boxArrayHeight; j++) {
  // make new array
  boxRow = [];
  for (i = 0; i < boxArrayLength; i++) {
    boxRow.push(boxArray[i][j])
  }
  // sort it
  boxRow.sort();
  // copy to boxArray
  for (i = 0; i < boxArrayLength; i++) {
    boxArray[i][j] = boxRow[i];
  }
}

// calculate each box on each column
var answerColumnBox = [];
boxArray.forEach(function(item) {
  var countItem = item.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  answerColumnBox.push(countItem);
});

print(answerColumnBox.join(' '));