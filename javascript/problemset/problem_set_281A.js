// Capitalization is writing a word with its first letter as a capital letter. Your task is to capitalize the given word.

// Note, that during capitalization all the letters except the first one remains unchanged.
// Input

// A single line contains a non-empty word. This word consists of lowercase and uppercase English letters. The length of the word will not exceed 103.
// Output

// Output the given word after capitalization.

var input = readline();

var inputCapitalized = input.split('').map(function(char, index) {
  if (index === 0) {
    return char.toUpperCase();
  }
  return char;
});

var answer = inputCapitalized.join('');

print(answer);