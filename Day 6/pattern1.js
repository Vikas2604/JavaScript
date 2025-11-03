/*
  Print the given pattern


  * 
  * * 
  * * * 
  * * * *
  * * * * *
*/

for (i = 0; i < 5; i++) {
  let row = ' ';
  for (j = 0; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}

console.log('Practice More! Couldnt do anything today. I was going through the basics of drawing...');