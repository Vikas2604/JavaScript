/*
  Print the given pattern

  * * * *
  * * * *
  * * * *
  * * * *
  * * * *
*/

for (i = 0; i < 5; i++) {
  let row = '';
  for (j = 0; j < 4; j++) {
    row += '* ';
  }
  console.log(row);
}