console.log("Welcome to Gambilng Simulator");
var totalAmount = 100;
var betPerGame = 1;
var result = Math.floor(Math.random * 2);
var win = 1;
var lose = 2;
if (result == win){
    totalAmount++;
}else{
    totalAmount--;
}  
