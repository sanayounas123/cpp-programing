const secret= Math.trunc(Math.random()*20)
const btn = document.querySelector(".check");
let coin = document.querySelector(".coin");
let tries = 0;
console.log(secret)
btn.addEventListener("click" , function(){
    if (tries > 3){
        alert("Try Again");
    }
else{
    const guess = document.querySelector(".guess").value
    if(guess == secret){
        document.querySelector(".number").textContent = secret
        document.querySelector('.message').textContent = "Correct Number";
        document.querySelector('.message1').textContent = "Congratulates you win 20";
        coin.style.display = "block";
    }
    else if (guess <secret){
      document.querySelector(".message").textContent =`The number is greater ${guess}`;
      tries++;
      console.log(tries);
    }
    else if (guess > secret){
        document.querySelector(".message").textContent =`The number is smaller than ${guess}`;
        tries++;
        console.log(tries)
      }}
})