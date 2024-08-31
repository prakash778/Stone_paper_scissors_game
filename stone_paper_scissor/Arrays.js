
// let name = [
//     {"name": "prakash", "age" : 23 , "dob": "21-08-2001" },
//     {"name":"bala ","age" : 23 , "dob":"23/07/02" }
// ]

// console.log(name[0].dob);

///////////stone paper scissors  game;


const playChoice = confirm("Shall we play stone, paper, scissors game !");
if(playChoice){
let player = prompt("enter stone or paper or scissor");

if(player){
    player.trim().toLowerCase()
if(player === "stone"|| player === "paper"||player === "scissors"  ){



let computer = ["stone" , "paper" , "scissors"]

let gameCom = computer[Math.floor(Math.random()*3)]
console.log(gameCom)
alert(`The computers choice is ${gameCom}`)


let game =( (player == gameCom )?"Its a tie !":(player == "scissors" && gameCom == "paper")? "player wins!":(player == "stone" && gameCom == "scissors") ? "player wins !":(player == "paper" && gameCom == "stone") ? "player wins !":"computer wins");
console.log(game)
let final = confirm(`${game}`)
final ? location.reload() :alert("we will play next time");
}
else{
   let playAgain = confirm("enter whether stone or paper or scissors ! if you want to play again restart the game")
   playAgain ? location.reload() :alert("we will play next time");

}
}
else{
    let playAgain = confirm("you have not entered any thing ! if you want to play restart the game")
   playAgain ? location.reload() :alert("we will play next time");

    
    
}

}

else{

    console.log("we will play next time")
}

// const num = [ 1,2,3,4,5,6,7,8,9] 

// console.log(num.splice(1,4))
// console.log(num)

// num.splice(2,0,"hello","world")

// console.log(num)
// const cars = ["bmw","audi","tata","maruti"]
// console.log(cars.splice(2,1))
// console.log(cars)
// cars.splice(2,0,"ev")
// console.log(cars)

