let randomNumber=(parseInt(Math.random()*100+1));//parseint means integer value 

const submitbutton=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')



let prevGuess=[];
let numGuess=1;
 
let playGame= true;

if (playGame) {
    submitbutton.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
// it valid date the valu is under 1 to 100 or not
if (isNaN(guess)){
    alert('Please enter a valid number')
} else if(guess<1){
    alert('Please enter a number more than 1')
}
else if(guess>100){
    alert('Please enter a number less than 100')
}else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${randomNumber} `)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}

function checkGuess(guess){
// it check the value is equal tom 100 or not
    if(guess === randomNumber){
    displayMessage(`you guessed it right`)
    endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}
function displayGuess(guess){
//it clean the value and check the value is same or not it update the arry and also update the previous guess and update the guesses remaining
  userinput.value='';
  guessSlot.innerHTML +=`${guess},  ` ;
  numGuess++;
  remaining.innerHTML =`${11-numGuess}`;

}

function displayMessage(message){
    //userinput value is o and inner.html add the guess play
    lowOrHi.innerHTML =`<h2>${message}</h2>`;
}

function endGame(){
    userinput.value='';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame"> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''; 
        remaining.innerHTML =`${11-numGuess}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true

    })
}

