function hiddenElementsById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementsById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// adding bg color
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// removing bg color
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet(){
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;

}

