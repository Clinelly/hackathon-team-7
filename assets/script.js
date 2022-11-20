//Global variables
const question = document.getElementById("question-content");

// List of worlds
const words = ["css", "dublin", "javascript", "code"]

//Select a random world from from list
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

// Tracks user answers 
let userAnswersCounter = 0

let questions = [{
    question: 'In which FIFA world cup was "Waka Waka" played?',
    choice1: '2002',
    choice2: '2006',
    choice3: '2010',
    choice4: '2014',
    answer: 3,
},
{
    question: "Who sings the song 'La camisa negra'? ",
    choice1: "Ricky Martin",
    choice2: "Enrique Iglesias",
    choice3: "Juanes",
    choice4: "Luis Fonsi",
    answer: 3,
},
{
    question: "Where was the artist 'Sia'? born",
    choice1: "US",
    choice2: "Canada",
    choice3: "Australia",
    choice4: "New Zealand",
    answer: 3,
},
{
    question: "What artist has released the most albums?",
    choice1: "Buckethead",
    choice2: "Frank Zappa",
    choice3: "Elvis Presley",
    choice4: "Masami Akita",
    answer: 4,
},
{
    question: "Where has the highest-attended concert been held?",
    choice1: "Moscow",
    choice2: "Rio de Janeiro",
    choice3: "Paris",
    choice4: "Philadelphia",
    answer: 2,
},
{
    question: "The average time listening to music per week is:",
    choice1: "2 hours",
    choice2: "6 hours",
    choice3: "12 hours",
    choice4: "18 hours",
    answer: 4,
},
{
    question: "The Mozart effect is related to:",
    choice1: "Classical music",
    choice2: "Vocal music",
    choice3: "Hip hop",
    choice4: "Reggae",
    answer: 1,
},
{
    question: "The oldest musical instrument found to date is:",
    choice1: "trumpet",
    choice2: "flute",
    choice3: "lithophone",
    choice4: "bullroarer",
    answer: 2,
},

]
// start the quiz
let startQuiz = () => {
    availableQuestions = [...questions];
    loadKeyboard();
    getNewQuestion();
}

// display answers
let getNewQuestion = () => {
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
}

// display keyboard
function loadKeyboard() {
    //Create keys
    for (let i = 0; i < selectedWord.length; i++) {
        let newKey = document.createElement('div');
        newKey.setAttribute('id','keyboard'+i);
        let keyboardArea = document.getElementById('keyboard-area');
        newKey.classList.add('col', 'border', 'border-dark', 'text-center', 'key-style');
        keyboardArea.appendChild(newKey);
    }    
}

// check final answer
function checkAnswer() {
    let answerValue = document.getElementById('finalAnswer').value;
    if (answerValue == selectedWord) {
        alert("You won!");
        location.reload();
    } else {
        if (userAnswersCounter >=2) {
            alert("You lost the game.");
            window.location = "https://8000-marcellomuy-hackathonte-t5d6ye6aw8i.ws-eu77.gitpod.io/index.html"
        } else {
            alert("Wrong answer.");
            userAnswersCounter++;
        }
    }
}

startQuiz()