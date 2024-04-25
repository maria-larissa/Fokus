/* DOM - Document Object Model is not a document is a tree made by HTML, CSS, JS, API's.

DOM is all what we see, imagens, texts, colors, sounds, interactions. */

const htmlocument = document.querySelector('html');

//Getting buttons to change options of rest and focus time 
const buttonsList = document.querySelectorAll('.app__card-button');
const focusButton = document.querySelector('.app__card-button--foco');
const timeFocusButton = 1500;

const shortButton = document.querySelector('.app__card-button--curto');
const timeShortButton = 300;

const longButton = document.querySelector('.app__card-button--longo');
const timeLongButton = 900;

// Getting the button to start/pause time
const startPauseButton = document.getElementById('start-pause');

// Getting timer 
const timerDisplay = document.getElementById('timer');

// Getting image class
const imageRespective = document.querySelector('.app__image');

// Getting title h1
const titleDisplay = document.querySelector('.app__title');


focusButton.addEventListener('click', () => {
    // Changing image and background color
    changeContextBanner('foco');

    // Changing button style
    focusButton,classList.add('active');
})

shortButton.addEventListener('click', ()=>{
    // Changing image and background color
    changeContextBanner('descanso-curto');
    
    // Changing button style
    shortButton.classList.add('active');
})

longButton.addEventListener('click', ()=>{
    // Changing image and background color
    changeContextBanner('descanso-longo');
    
    // Changing button style
    longButton.classList.add('active');
})

function changeContextBanner(context){    
    // Changing background body color
    htmlocument.setAttribute('data-contexto', context);

    // Changing image on the card
    imageRespective.setAttribute('src', `/images/${context}.png`);
    
    // Removing style of every button
    buttonsList.forEach((element) => {
        element.classList.remove('active');
    })
    
    // Changing respective text
    switch (context){
        case "foco":
            titleDisplay.innerHTML = `Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        
        case "descanso-curto":
            titleDisplay.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
            
        case "descanso-longo":
            titleDisplay.innerHTML = `Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
                
        default:
            break;
    }
}