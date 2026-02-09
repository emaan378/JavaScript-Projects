let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
const options=["rock","paper","Scissors"]
const randidx = Math.floor(Math.random()*3);
return options[randidx]
}
const drawGame=()=>{
    console.log("THe Game was Draw")
}


const playGame = (userChoice)=>{
console.log("User Choice =",userChoice)
//Generate computer choice
const compChoice = genCompChoice();
console.log("Comp Choice =",compChoice)
if (userChoice==compChoice){
    drawGame(); } 
    else{
        let userWin=true;
        if (userChoice=="rock"){
            //scissrs,paper
            userWin==compChoice==="paper"?false:true;

        }

    else if(userChoice==="paper"){
        //rock,scissors
        compChoice ==="scissors"?false:true
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
    
        playGame(userChoice);
    });
});