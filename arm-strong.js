let x = 205;
let y = x;
sum =0;

while (x>0){
  reminder = x % 10;
  sum =sum + reminder ** 3;
  x = x - reminder;
  x = x / 10;
}

console.log("the sum of digit of givne number is : " +sum);
console.log("the value of given number is :" +y);
if(sum ==y){
  console.log("the give number is a armstrong number");
}
else{
  console.log("the given number is a not armstrong number");
}