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
  //  for (j = 0; j <= 5; j++) {
  //   row += '* ';
  // }
  for (k = i; k < 5; k++) {
    row += '* ';
  }
  console.log(row);
}

