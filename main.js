/* DOM - Document Object Model is not a document is a tree made by HTML, CSS, JS, API's.

DOM is all what we see, imagens, texts, colors, sounds, interactions. */

const htmlDocument = document.querySelector('html');

//Getting buttons to change options of rest and focus time 
const buttonsList = document.querySelectorAll('.app__card-button');
const focusButton = document.querySelector('.app__card-button--foco');
const shortButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');



// Getting image class
const imageRespective = document.querySelector('.app__image');

// Getting title h1
const titleDisplay = document.querySelector('.app__title');


// Getting the button to start/pause time
const startPauseButton = document.getElementById('start-pause');
const startPauseIcon = document.querySelector('.app__card-primary-butto-icon');
console.log(startPauseButton);

const musicInput = document.querySelector('#alternar-musica');
const music = new Audio('/sounds/luna-rise-part-one.mp3');
music.pause();
music.loop = true;

// Getting timer 
const timerDisplay = document.getElementById('timer');
const timeFocusButton = 1500;
const timeShortButton = 300;
const timeLongButton = 900;
let timePassedOnSeconds = timeFocusButton;
let intervaloId = null;
const soundStartTimer= new Audio('/sounds/play.wav');
const soundPauseTimer= new Audio('/sounds/pause.mp3');
const soundFinishedTimer= new Audio('/sounds/beep.mp3');


focusButton.addEventListener('click', () => {
    // Setting correct time for each option
    zero();
    timePassedOnSeconds = timeFocusButton;
    
    // Changing image and background color
    changeContextBanner('foco');


    // Changing button style
    focusButton.classList.add('active');
    
})

shortButton.addEventListener('click', ()=>{
    // Setting correct time for each option
    zero();
    timePassedOnSeconds = timeShortButton;

    // Changing image and background color
    changeContextBanner('descanso-curto');
    
    // Changing button style
    shortButton.classList.add('active');

})

longButton.addEventListener('click', ()=>{
    // Setting correct time for each option
    zero();
    timePassedOnSeconds = timeLongButton;
    
    // Changing image and background color
    changeContextBanner('descanso-longo');
    
    // Changing button style
    longButton.classList.add('active');
    
})

function changeContextBanner(context){    
    // Changing background body color
    htmlDocument.setAttribute('data-contexto', context);

    // Changing image on the card
    imageRespective.setAttribute('src', `/images/${context}.png`);
    
    // Removing style of every button
    buttonsList.forEach((element) => {
        element.classList.remove('active');

        // Setting start style button
        startPauseButton.innerHTML = `<img class="app__card-primary-butto-icon" src="/images/play_arrow.png" alt="">
        <span>Começar</span>`;
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

// Playing or pausing relaxing music
musicInput.addEventListener('change', () => {
    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
})

// Coundown time function
const countDown = () => {
    if(timePassedOnSeconds <= 0){
        // Sound of finished timer
        soundFinishedTimer.play();
        alert(`Time's Up!`);
        zero();
        return;
    }

    timePassedOnSeconds -= 1;
    console.log('temporiorizador: ' + timePassedOnSeconds);
}

startPauseButton.addEventListener('click', startPauseTime);

// Automatic countdown. This function call countDown variable every 1 second 
function startPauseTime(){
    if(intervaloId){
        // Sound of pausing timer
        startPauseButton.innerHTML = `<img class="app__card-primary-butto-icon" src="/images/play_arrow.png" alt="">
        <span>Retomar</span>`;
        soundPauseTimer.play();
        zero();
        return;
    }
    // Sound of starting timer
    soundStartTimer.play();
    startPauseIcon.setAttribute('src',`/images/pause.png`);

    // Start counting down time
    intervaloId = setInterval(countDown, 1000);
    startPauseButton.innerHTML = `<img class="app__card-primary-butto-icon" src="/images/pause.png" alt="">
    <span>Pausar</span>`;
}


function zero(){
    clearInterval(intervaloId);
    intervaloId = null
}
