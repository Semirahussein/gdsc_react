let number=prompt("what is the maximum number you want to see the odd numbersup to?");
console.log("the odd numbers between 1 and "+number+" are:");
for(let i=1;i<=number;i++){
if(i%2!=0){
console.log(i);
}
}

