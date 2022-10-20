var userName = prompt('What is your username');
alert('Hello'+ " " + userName);

function* range(start, end){
yield start;
if (start === end) return;
yield* range(start + 1, end);
};

let endRange = 2;
let guess= range(1, endRange)

let x = Math.round(Math.random() * 2) + 1;
let points = 1;

loop = true

do{
    guess = prompt("Enter your guess or q to quit")
    if(guess != x && guess <= x){
console.log("you guessed wrong\n")
points--;
endRange--;
if(points < 0){
    console.log("You lose")
}
else{
    console.log("You have " + points + "points left\n")
    console.log("You now have "+ points +"points and the range has been reduced to " + endRange + "\nlast Try!")
}
if (points <= 0 && endRange == 0){
    break
}
else if (points == 0 && endRange > 0){
    continue
}
else{
    continue
}
    }
    else if(guess != x && guess > x){
        console.log("Your guess is to big and out of range")
    }
    else if(guess == x){
        console.log("You guessed right!!")
        console.log("The number is " + x)
        points++;
        endRange++;
        console.log("You now have "+ points + "points and the range has been increased to "+ endRange)
    }
    else if(guess == 'q'){
        loop = false
    }
    else{
        console.log("That wasn't a command I recognize. Did you mean 'q': ")
        console.log("You still have "+ points +"points");

    }
} while (loop);
