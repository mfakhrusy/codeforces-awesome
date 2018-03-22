// input, split into array, and change it to Number (integer)
const inputs = readline().split(' ');
// const [squareLength, squareWidth, flagstoneLength] = readline().split(' ').map(input => Number(input));
const squareLength = Number(inputs[0]);
const squareWidth = Number(inputs[1]);
const flagstoneLength = Number(inputs[2]);

const countFlagstoneWidth = Math.ceil(squareWidth / flagstoneLength);
const countFlagstoneLength = Math.ceil(squareLength / flagstoneLength);

print(countFlagstoneWidth * countFlagstoneLength);