//Global variables
const question = document.getElementById("question-content");

let questions = [{
    question: 'In which FIFA world cup was "Waka Waka" played?',
    choice1: '2002',
    choice2: '2006',
    choice3: '2010',
    choice4: '2014',
    answer: 4,
},
{
    question: "Who sings the song 'La camisa negra'? ",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: "" ,
},

]
// start the quiz
let startQuiz = () => {
    availableQuestions = [...questions];
    getNewQuestion();
}

// display answers
let getNewQuestion = () => {
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
}
startQuiz()