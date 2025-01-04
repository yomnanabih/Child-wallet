const question =[ 
     
    { 
        question: "Borrowed money is free money." , 
        answer:[ 
            {Text:"true" , correct: false}, 
            {Text:"false" , correct:true}, 
        ] 
            
    }, 
    { 
        question: "You have to pay interest on the money you borrow from the bank." , 
        answer:[ 
            {Text:"true" , correct: true}, 
            {Text:"false" , correct:false}, 
        ] 
            
    }, 
    { 
        question: "The later you pay the money you owe, the lower your credit score will be." , 
        answer:[ 
            {Text:"true" , correct: true}, 
            {Text:"false" , correct:false}, 
        ] 
            
    }, 
    { 
        question: "There's no cost to borrowing money." , 
        answer:[ 
            {Text:"true" , correct: false}, 
            {Text:"false" , correct:true}, 
        ] 
            
    }, 
    { 
        question: "The sooner you repay the borrowed money, the less interest will be due." , 
        answer:[ 
            {Text:"true" , correct: true}, 
            {Text:"false" , correct:false}, 
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
    nextButton.innerHTML ="next"; 
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
    questionElement.innerHTML ='YOU’RE READY TO BORROW WISELY.'; 
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