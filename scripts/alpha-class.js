// function play(){

//     // hidden homescreen 
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

    
//     // remove hidden from playground 
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handelKeyboardKeyUpEvent(event){

    // player pressed
    const playerPressed = event.key;
    console.log(playerPressed);

    // current alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed,expectedAlphabet);

    if(playerPressed === expectedAlphabet){

        const currentScore = getTextElementValueById('current-score');

        const updatedScore = currentScore + 1;

        setTextElementValueById('current-score',updatedScore);


        // // console.log('you get a point');
         
        // // get current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        
        // // increase the current score
        // const newScore = currentScore + 1;

        // // show the update score
        // currentScoreElement.innerText = newScore;
 
        // start new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else if(playerPressed === '0'){
        hiddenElementsById('play-ground');
        showElementsById('home-screen');
        const currentAlphabet = getTextElementById('current-alphabet');
        removeBackgroundColorById(currentAlphabet); 
    }
    else{
        console.log('you lost a point');
        const currentLife = getTextElementValueById('current-life');
         const updatedLife = currentLife - 1;

         setTextElementValueById('current-life',updatedLife);

         if(updatedLife === 0){
            gameOver();
         }





        // // 1.get the current life number 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // 2.reduce the current life
        // const newLife = currentLife - 1;


        // // 3.display the updated life score
        // currentLifeElement.innerText = newLife;
    }

}

document.addEventListener('keyup',handelKeyboardKeyUpEvent)

function continueGame(){
    const alphabet = getARandomAlphabet()
    console.log(alphabet);

    // show the alphabet on the screen 

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set backgrouncolor of alphabet 
    setBackgroundColorById(alphabet);

     

}

function play(){
    hiddenElementsById('home-screen');
    hiddenElementsById('final-score');
    showElementsById('play-ground');


    // reset score and life 
    setTextElementValueById('current-score',0);
    setTextElementValueById('current-life',5);

    continueGame();

}

function gameOver(){
    hiddenElementsById('play-ground');
    showElementsById('final-score');

    const gameScore = getTextElementValueById('current-score');
    console.log(gameScore);
    setTextElementValueById('game-score',gameScore);

    const currentAlphabet = getTextElementById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

