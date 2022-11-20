//Global variables
const question = document.getElementById("question-content");
const answer1 = document.getElementById("option1");
const answer2 = document.getElementById("option2");
const answer3 = document.getElementById("option3");
const answer4 = document.getElementById("option4");
const quizAnswers = document.getElementsByClassName("answers");
const questionCounter = 0;
const turn = 0;

// List of worlds
const words = ["css", "dublin", "javascript", "code"]

//Select a random world from from list
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

// Tracks user answers 
let userAnswersCounter = 0

let questions = [{
    question: 'In which FIFA world cup was "Waka Waka" played?',
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
    loadKeyboard();
    getNewQuestion();
}

// display questions & answers
let getNewQuestion = () => {
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    const currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    let all_answers = currentQuestion.incorrect.concat(currentQuestion.correct);
        answer1.innerHTML = all_answers[0];
        answer2.innerHTML = all_answers[1];
        answer3.innerHTML = all_answers[2];
        answer4.innerHTML = all_answers[3];

    }

    //questionCounter++
    //when user clicks a button get a value

[...quizAnswers].forEach(answer => answer.addEventListener("click", selectAnswer))

function selectAnswer (e) {
    const userChoice = e.target.innerHTML; 


}

startQuiz()


=======
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

