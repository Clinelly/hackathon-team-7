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
    getNewQuestion()
    curr_track.src = availableQuestions[turn].path;
    curr_track.play();
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




