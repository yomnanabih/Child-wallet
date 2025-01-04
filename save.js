const question =[
    
    {
        question: "The longer your money is in a savings account, the more money you'll earn." ,
        answer:[
            {Text:"true" , correct: true},
            {Text:"false" , correct:false},
        ]
           
    },
    {
        question: "The easiest way to save your money is to pay yourself first." ,
        answer:[
            {Text:"true" , correct: true},
            {Text:"false" , correct:false},
        ]
           
    },
    {
        question: "Compound interest is when you earn interest on both the money you’ve saved and the interest you earn." ,
        answer:[
            {Text:"true" , correct: true},
            {Text:"false" , correct:false},
        ]
           
    },
    {
        question: "The interest rate on a savings account decreases as you deposit more money." ,
        answer:[
            {Text:"true" , correct: false},
            {Text:"false" , correct:true},
        ]
           
    },
    {
        question: "A university fund is an example of a short-term goal." ,
        answer:[
            {Text:"true" , correct: false},
            {Text:"false" , correct:true},
        ]
           
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML ="Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion =question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " +currentQuestion. 
    question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);

    })
}


function resetState(){
    nextButton.style.display ="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;
    });
    nextButton.style.display ="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML ='YOU’RE NOW A SAVVY SAVER!';
    nextButton.innerHTML="start over";
    nextButton.style.display ="block";
}
 
function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();