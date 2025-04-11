let scorestr = localStorage.getItem('score');
let score =  JSON.parse(scorestr) || 
   {
    match:0,
    win: 0,
    lost:0,
    Draw:0,
    };
// if(scorestr !== undefined){
//     score = JSON.parse(scorestr);
// }
// else{
//     score ={
//     match:0,
//     win: 0,
//     lost:0,
//     Draw:0,
//     };
// }
        score.displayscore = function() {
        return `No of mathces : ${score.match},  won :  ${score.win},    lost :  ${score.lost},      Draw : ${score.Draw}`;
    }




function generateComputerChoice() {
    const choices = ["Bat", "Ball", "Stump"];
    return choices[Math.floor(Math.random() * 3)];
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn:not(#resetBtn)").forEach((button) => {
        button.addEventListener("click", function () {
            score.match++;
            let userChoice = this.innerText;
            let computerChoice = generateComputerChoice();
            let resultMsg;

            if (userChoice === computerChoice) {
                    score.Draw++;
                    resultMsg = "Draw.";
            
            } else if (
                (userChoice === "Bat" && computerChoice === "Ball") ||
                (userChoice === "Ball" && computerChoice === "Stump") ||
                (userChoice === "Stump" && computerChoice === "Bat")
            ) {
                score.win++;
                resultMsg = "You win!";
            } else {
                score.lost++;
                resultMsg = "Computer wins!";
            }

            localStorage.setItem('score', JSON.stringify(score));

            document.querySelector('#user-move').innerText=`you are chosen ${userChoice}`;

            document.querySelector('#computer-move').innerText=`computer chosen ${computerChoice}`;


            document.querySelector('#result').innerText= `result is : ${resultMsg}`;

            document.querySelector('#score').innerText=`Score is : ${score.displayscore()}`;
        });
    });
    document.getElementById("resetBtn").addEventListener("click", function () {
        // Clear localStorage
        localStorage.removeItem('score');

        // Reset in-memory score object
        score.match = 0;
        score.win = 0;
        score.lost = 0;
        score.Draw = 0;

        // Clear UI elements
        document.querySelector('#user-move').innerText = '';
        document.querySelector('#computer-move').innerText = '';
        document.querySelector('#result').innerText = '';
        document.querySelector('#score').innerText = `Score is: ${score.displayscore()}`;

        // Confirmation message
        alert('game is ended');
    });

    // Initialize displayed score on page load
    document.querySelector('#score').innerText = `Score is: ${score.displayscore()}`;
    });
