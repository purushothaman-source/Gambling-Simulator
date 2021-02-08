console.log("Welcome to Gambilng Simulator");
var totalAmount = 100;
var betPerGame = 1;
var win = 1;
var lose = 2;
while (totalAmount != 150 && totalAmount != 50) {
    var result = Math.floor(Math.random() * 10)%2;
    if(result == win) {
        totalAmount++;
    } else {
        totalAmount--;
    }
}
console.log(totalAmount);