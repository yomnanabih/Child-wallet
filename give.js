const question =[ 
     
    { 
        question: "The only way to give back is by donating money." , 
        answer:[ 
            {Text:"true" , correct: false}, 
            {Text:"false" , correct:true}, 
        ] 
            
    }, 
    { 
        question: "Giving back can help you improve your community." , 
        answer:[ 
            {Text:"true" , correct: true}, 
            {Text:"false" , correct:false}, 
        ] 
            
    }, 
    { 
        question: "You can include charitable donations in your budget." , 
        answer:[ 
            {Text:"true" , correct: true}, 
            {Text:"false" , correct:false}, 
        ] 
            
    }, 
    { 
        question: "Charitable contributions should be prioritized over needs." , 
        answer:[ 
            {Text:"true" , correct: false}, 
            {Text:"false" , correct:true}, 
        ] 
            
    }, 
    { 
        question: "You should only give items in good condition to charity." , 
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
    questionElement.innerHTML ='CONGRATULATIONS! YOU ARE ON YOUR WAY TOWARD MAKING THE WORLD A BETTER PLACE.'; 
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