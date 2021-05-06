const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
 const a_text = document.getElementById("a_text");
 const b_text = document.getElementById("b_text");
 const c_text = document.getElementById("c_text");
 const d_text = document.getElementById("d_text");
 const question = document.getElementById("question");
var currentQuiz = 0;
const button = document.querySelector("button");
 var score = 0;
 const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");




 function loadQuiz(){
 	deselectAnswers();
 question.innerHTML = quizData[currentQuiz].question;
 a_text.innerHTML = quizData[currentQuiz].a;
 b_text.innerHTML = quizData[currentQuiz].b;
 c_text.innerHTML = quizData[currentQuiz].c;
 d_text.innerHTML = quizData[currentQuiz].d;
}
loadQuiz();


function getSelected(){
	
    let answer = undefined;

    answerEls.forEach((answerEl) =>{
    	if(answerEl.checked){
    		answer = answerEl.id;
    	}
    })

    return answer;
}
 function deselectAnswers(){
 	answerEls.forEach((answerEl) =>{
 		answerEl.checked = false;
 	})
 }
button.addEventListener("click",() =>{
	let answer = getSelected();
	console.log(answer)
	

	if(answer){
		if(answer === quizData[currentQuiz].correct){
			score++;
		}
		currentQuiz++;
		if(currentQuiz < quizData.length){
			loadQuiz();
		}else{
			          quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
		}
	}
})