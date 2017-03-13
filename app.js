
var quiz = {
		name:"plant biology",
		questions: [
			{
				question: "Flowering plants are all members of which group?",
				answers: ["Angiospermae","Gymnospermae","Somuchspermae","Florophyta"],
				correctAnswer: 0
			}
		]
	}

$(document).ready(function(){
	var currentQuestion = 0;
	var html = '';
	html += `<h3>${quiz.questions[currentQuestion].question}</h3>
				<form id="answers">`
	
	for(i = 0; i < quiz.questions[currentQuestion].answers.length; i++) {
		html += `<input type="radio" name="answers" value="${i}"> 
				${quiz.questions[currentQuestion].answers[i]}</br>`
	}

	
	
	$("#question-box").html(html)
});