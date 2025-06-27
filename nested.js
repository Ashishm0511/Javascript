let winN = 18;
let guess = +prompt("guess a no");
if (guess === winN){
    console.log("Guess is right");
}else{
    if(winN < guess){
        console.log("Too high");
    }
    else{
        console.log("too low");

        }
    }
