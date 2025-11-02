/*
  Print the given pattern

  * 
  * * 
  * * * 
  * * * *
  * * * * *
  * * * * *
  * * * * 
  * * *
  * *
  * 
*/

for (i = 0; i < 10; i++) {
  let row = ' ';
  for (j = i; j < 5; j++) {
    row += '* ';
  }
  console.log(row);
}

console.log('Hello');