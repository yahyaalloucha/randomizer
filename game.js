var robot = document.getElementById('robot');
var current_rotation = 0;

var player = null;
var computer = null;
var moves = ["Rock","sescior","paper"];
var computerScore = 0;
var playerScore = 0;
document.getElementById('pScore').innerText=playerScore;
document.getElementById('cScore').innerText=computerScore;

function computerPlay(){
    var num = Math.floor(Math.random()*3)
    computer = moves[num];
}

function addpScore(){
    playerScore = playerScore+10;
    document.getElementById('pScore').innerText=playerScore;
    document.getElementById('screen').innerText= "Player Won"
    if(playerScore==50){
        
        playerScore=0;
        computerScore=0;
        document.getElementById('screen').innerText="enjoy the game"
        document.getElementById('pScore').innerText=playerScore;
        document.getElementById('cScore').innerText=computerScore;
        current_rotation += 360;

        // rotate clockwise by 90 degrees
        document.querySelector("#robot").style.transform = 'rotate(' + current_rotation + 'deg)';

    }
}
function addcScore(){
    computerScore = computerScore +10;
    document.getElementById('cScore').innerText=computerScore;
    document.getElementById('screen').innerText= "Computer Won"
    if(computerScore==50){
        
        playerScore=0;
        computerScore=0;
        document.getElementById('screen').innerText="enjoy the game"
        document.getElementById('pScore').innerText=playerScore;
        document.getElementById('cScore').innerText=computerScore;
        current_rotation += 360;

	// rotate clockwise by 90 degrees
    document.querySelector("#robot").style.transform = 'rotate(' + current_rotation + 'deg)';
    }

}

function checkGame(){
    if(player == 'Rock'){
        if(computer == "Rock") {
            alert("it is a tie");
            document.getElementById('screen').innerText= "it is a tie"

        }else if(computer=="paper"){
            alert("computer won")
            addcScore();

        }else{
            alert("player won");
            addpScore();
        }
        
    }else if(player=="sescior"){
        if(computer == "Rock") {
            alert("computer won")
            addcScore()

        }else if(computer=="paper"){
            alert("player won")
            addpScore();

        }else{
            alert("it is a tie");
            document.getElementById('screen').innerText= "it is a tie"
        }
    }else{
        if(computer == "Rock") {
            alert("player won")
            addpScore();

        }else if(computer=="paper"){
            alert("it is a tie");
            document.getElementById('screen').innerText= "it is a tie"
        }else{
            alert("computer won")
            addcScore()

           
        }
    }
}
document.getElementById('rock').addEventListener('click',function(){
    player = "Rock";
    computerPlay();
    checkGame();

})

document.getElementById('paper').addEventListener('click',function(){
    player = "paper";
    computerPlay();
    checkGame();

})

document.getElementById('mi9as').addEventListener('click',function(){
    player = "sescior";
    computerPlay();
    checkGame();

})




