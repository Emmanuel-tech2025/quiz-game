
let questions = [
    {
        question: "What is the longest river in the world?",
        answers: [
            {text: "Amazon", correct: false},
            {text: "River Nile", correct: true},
            {text: "River Niger", correct: false},
            {text:  "River Congo", correct: false}
        ]
    },
      {
        question: "What is the capital of france?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "London", correct: false},
            {text:  "Pretoria", correct: false}
        ]
    },
      {
        question: "Who painted the Mona Lisa",
        answers: [
            {text: "Leonardo Dicaprio", correct: false},
            {text: "Vincent Van Gogh", correct: false},
            {text: "michelangelo", correct: false},
            {text:  "Leonardo da Vinci", correct: true}
        ]
    },
         {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: false},
            {text: "Jupiter", correct: true},
            {text:  "Saturn", correct: false}
        ]
    },
         {
        question: `Which music group's hits include "want to hold your hand"?`,
        answers: [
            {text: "The Beatles", correct: true},
            {text: "The Rolling Stones", correct: false},
            {text: "Led Zeppelin", correct: false},
            {text:  "Pink Floyd", correct: false}
        ]
    },
         {
        question: "What is the Chemical symbol for gold?",
        answers: [
            {text: "Pb", correct: false},
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text:  "Fe", correct: false}
        ]
    },
         {
        question: `Who wrote "To Kill a Mockingbird"?`,
        answers: [
            {text: "Harper Lee", correct: true},
            {text: "The Rolling Stones", correct: false},
            {text: "Jane Austen", correct: false},
            {text:  "J.K Rowling", correct: false}
        ]
    },
         {
        question: "What is the smallest Country in the world?",
        answers: [
            {text: "South Sudan", correct: false},
            {text: "Monaco", correct: false},
            {text: "Vatican City", correct: true},
            {text:  "Mexico", correct: false}
        ]
    },
         {
        question: "What is the youngest country in the world?",
        answers: [
            {text: "Sao tome and Principe", correct: false},
            {text: "Sudan", correct: false},
            {text: "Switzerland", correct: false},
            {text:  "South Sudan", correct: true}
        ]
    },
         {
        question: "Who is the first President of Kenya?",
        answers: [
            {text: "Mwai Kibaki", correct: false},
            {text: "Uhuru Kenyatta", correct: false},
            {text: "Jomo Kenyatta", correct: true},
            {text:  "William Ruto", correct: false}
        ]
    },
         {
        question: "What is the largest mammal in the world?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
            {text: "Gorilla", correct: false},
            {text:  "Whale", correct: true}
        ]
    },
         {
        question: `who wrote "Romeo and Juliet"?`,
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: "The Rolling Stones", correct: false},
            {text: "Charles Dickens", correct: false},
            {text:  "Leonardo da Vinci", correct: false}
        ]
    },
         {
        question: "What is the capital of Japan?",
        answers: [
            {text: "Beijing", correct: false},
            {text: "JUba", correct: false},
            {text: "Nairobi", correct: false},
            {text:  "Tokyo", correct: true}
        ]
    },
         {
        question: "Who discovered force of gravity?",
        answers: [
            {text: "Albert Einstein", correct: false},
            {text: "Isaac Newton", correct: true},
            {text: "Galileo Galilei", correct: false},
            {text:  "Louis Pasteur", correct: false}
        ]
    },
         {
        question: "What is the largest Living structure in the world?",
        answers: [
            {text: "The Great Wall of China", correct: false},
            {text: "Amazon Rainforest", correct: false},
            {text: "The Great Pyramid of Giza", correct: false},
            {text:  "Great Barrier Reef", correct: true}
        ]
    },
         {
        question: "What is the fastest animal on land?",
        answers: [
            {text: "Lion", correct: false},
            {text: "Cheetah", correct: true},
            {text: "Tiger", correct: false},
            {text:  "Elephant", correct: false}
        ]
    },
         {
        question: `Who painted "the Starry night"?`,
        answers: [
            {text: "Leonardo Dicaprio", correct: false},
            {text: "Vincent Van Gogh", correct: true},
            {text: "Pablo Picasso ", correct: false},
            {text:  "Claude Monet", correct: false}
        ]
    },
    
    
]

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("options");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () =>{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    showQuestion();
}

const  showQuestion = () =>{

    resetState();
   
    const currentQuestion = questions[currentQuestionIndex];
    let questionNo =  currentQuestionIndex + 1;
    questionEl.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document .createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    

    });

}

const resetState = () =>{
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


const selectAnswer = (e) =>{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.style.background = "#9aeabc"; 
        score++; 
    } else{
        selectedBtn.style.background = "#ff9393";
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.style.background = "#9aeabe";
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";

}

const handleNextButton = () =>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion(questions[currentQuestionIndex]);
    }else{
        showScore();
    }
}

const showScore = () =>{
    resetState();
    questionEl.innerHTML = `<h2> You scored ${score} out of ${questions.length},`
    nextButton.innerHTML = "play again!";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();