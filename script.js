document.addEventListener("DOMContentLoaded", function() {
let userPick=document.querySelectorAll('.userChoice');
let computerPick=document.querySelectorAll('.computerChoice');
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector('.triangle');
let ruleButtons = document.querySelectorAll('.ruleBtn');
let closeButtons = document.querySelectorAll('.crossBtn');
let rules = document.querySelectorAll('.rule');
let userChoose=document.querySelector('.userPickTitle');
let computerChoose=document.querySelector('.computerPickTitle');
let result=document.querySelector('.result');
let winLoss=document.querySelector('.winLoss');
let playButtons=document.querySelectorAll('.playButton');
let spanDisplay=document.getElementById("span");
let nextButton=document.getElementById("nextButton");
let userScore=document.getElementById("userScore");
let computerScore=document.getElementById("computerScore");
let userScoreValue=JSON.parse(localStorage.getItem("userScoreValue"));
let computerScoreValue=JSON.parse(localStorage.getItem("computerScoreValue"));
let winLossContainer=document.querySelector('.winLossContainer');
let userWinBubble=document.querySelector('.userWinBubble');
let computerWinBubble=document.querySelector('.computerWinBubble');
let firstPage= document.querySelector('.container');
let secondPage=document.querySelector('.hurrayContainer');

let userCount=0;
let computerCount=0;

// Show/hide rules
ruleButtons.forEach(ruleButton => {
    ruleButton.addEventListener('click', () => {
        rules.forEach(rule=>{
        rule.classList.add('show-rule');
        });
    });
});


closeButtons.forEach(closeButton=>{
    closeButton.addEventListener('click', () => {
        rules.forEach(rule=>{
        rule.classList.remove('show-rule');
        });
    }); 
});

if(userScoreValue){
    userScore.innerHTML=userScoreValue;
}
else{
    userScoreValue = 0;
    userScore.innerHTML = userScoreValue;
}
if(computerScoreValue){
  computerScore.innerText=computerScoreValue;
}
else{
    computerScoreValue = 0;
    computerScore.innerText = computerScoreValue;
}

//hide the current page 
userPick.forEach((element,index)=>{
    element.addEventListener('click', ()=>{
        userChoose.style.opacity="1";
        triangle.style.display="none";
        userPick.forEach((item)=>{
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show-userPick");

        computerChoose.style.opacity="1";
        computerPick[random].style.display="block";
        computerPick[random].classList.add("show-computerPick");
        
        setTimeout(()=>{
            if(index==random){
                result.style.display="block";
                winLoss.innerText="TIE UP";
                spanDisplay.style.display="none";
                playButton.innerText="REPLAY";
            }
            else if(index==0 && random==2 ||index==1 && random==0 || index==2 && random==1){
                result.style.display="block";
                winLoss.innerText="YOU WIN";
                nextButton.style.display="block";
                userWinBubble.style.display="block";
                userCount=userScoreValue;
                userCount++;
                userScore.innerText=userCount;
                localStorage.setItem("userScoreValue",JSON.stringify(userCount));
            }
            else{
                result.style.display="block";
                winLoss.innerText="YOU LOST";
                computerWinBubble.style.display="block";
                computerCount=computerScoreValue;
                computerCount++;
                computerScore.innerText=computerCount;
                localStorage.setItem("computerScoreValue",JSON.stringify(computerCount));
            }

        },500);
    });
});

playButtons.forEach(playButton => {
    playButton.addEventListener('click', () => {
        window.location.reload();
    });
});

nextButton.addEventListener('click',()=>{
    firstPage.style.display="none";
    secondPage.style.display="block";

});
});
