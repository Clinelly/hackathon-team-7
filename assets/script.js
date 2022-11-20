//Global variables
const question = document.getElementById("question-content");
const answer1 = document.getElementById("option1");
const answer2 = document.getElementById("option2");
const answer3 = document.getElementById("option3");
const answer4 = document.getElementById("option4");
const quizAnswers = document.getElementsByClassName("answers");
const next_button = document.getElementById("next-button");
let curr_track = document.createElement('audio');
let turn = 0;
let isButtonClicked = true;


let questions = [
{
        question: 'Who sings this song',
        incorrect: ["2002", "2006", "2010"],
        correct: ["Lady Gaga"],
        path: "badRomance.mp4",
                  
 },
{

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
    
    incorrect: ["2002", "2006", "2010"],
    correct: ["2014"]
        
      
},
{
    question: "Who sings the song 'La camisa negra'? ",
    incorrect: ["Ricky Martin", "Enrique Iglesia", "Luis Fonsi"],
    correct: ["Juanes"]
},

]
// start the quiz
let startQuiz = () => {
    availableQuestions = [...questions];

    getNewQuestion()
    curr_track.src = availableQuestions[turn].path;
    curr_track.play();

    loadKeyboard();
    getNewQuestion();

}

next_button.addEventListener("click", () => {
    turn++; 
    getNewQuestion()
    isButtonClicked = true
})


// display questions & answers
let getNewQuestion = () => {
    
    const currentQuestion = availableQuestions[turn];
    question.innerText = currentQuestion.question;
    let all_answers = currentQuestion.incorrect.concat(currentQuestion.correct);
        answer1.innerHTML = all_answers[0];
        answer2.innerHTML = all_answers[1];
        answer3.innerHTML = all_answers[2];
        answer4.innerHTML = all_answers[3];
    console.log(currentQuestion)
    }

window.onload = startQuiz();

// get question's answers and apply a Click event to each of them
[...quizAnswers].forEach(answer => answer.addEventListener("click", selectAnswer))

// Change selected answer background when is correct or incorrect
function selectAnswer (e) {
    if(!isButtonClicked) {
        return;
    }
    isButtonClicked = false;
    const userChoice = e.target.innerHTML;
    const correctChoice = availableQuestions[turn].correct[0];
    if (userChoice === correctChoice) {
        e.target.style.backgroundColor = "green";
    } else {
        e.target.style.backgroundColor = "red";
         
    }
    setTimeout (() =>{ 
        e.target.style.backgroundColor = "#F6F3E8ff";
        e.target.style.color="#1D3461";
    }, 1000); 
    
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

