const GAME_TIME = 5;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let words =[];


const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init(){
    buttonChange('게임 로딩 중....')
    getWords();
    wordInput.addEventListener('input', checkMatch)
}

function run(){
    if(isPlaying){
        return;
    }
    isPlaying = true;
    time = GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange('게임중')
}

function checkStatus(){
    if(!isPlaying && time === 0){
        buttonChange('게임시작');
        clearInterval(checkInterval);
    }
}

function getWords(){
    axios.get('https://random-word-api.herokuapp.com/word?number=100')
        .then(function(response) {
            response.data.forEach((word)=>{
                if(word.length < 10){
                    words.push(word);
                }
            })
            buttonChange('게임시작');
        })
        .catch(function(error){
            console.log(error);
        })
    buttonChange('게임시작');
}

function checkMatch(){
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordInput.value = "";
        if(!isPlaying){
            return;
        }
        score++;
        scoreDisplay.innerText = score;
        time = GAME_TIME;
        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomIndex];
    }
}


function countDown(){
    time > 0 ? time-- : isPlaying = false;
    if(!isPlaying){
        clearInterval(timeInterval)
    }
    timeDisplay.innerText = time;
}

function buttonChange(text){
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}