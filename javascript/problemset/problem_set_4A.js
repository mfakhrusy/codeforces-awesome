const numbers = Number(readline());
if (numbers === 2) {
  print('NO');
} else {
  if (numbers % 2 === 0) {
    print('YES');
  } else {
    print('NO');
  }
}