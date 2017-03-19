
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
	var score = 0;

	var html = '';
	const showQuestion = () => {
		html += `<h3>${quiz.questions[currentQuestion].question}</h3>
					<form id="answers">`
		
		for(i = 0; i < quiz.questions[currentQuestion].answers.length; i++) {
			html += `<input type="radio" name="answers" value="${i}"> 
					${quiz.questions[currentQuestion].answers[i]}</br>`
		}
		html += `<button id="submitButton" type="submit">submit</button></form>`;
		$("#question-box").html(html);
	};

	showQuestion();
	$(document).on('click','#submitButton',function(e) { 
		e.preventDefault();
		console.log("answer submitted");
		if( $('input[name="answers"]:checked').val() == quiz.questions[currentQuestion].correctAnswer) {
			score++;
		}
		currentQuestion++;
		if( currentQuestion < quiz.questions.length) {
			showQuestion();
		} else {
			html = `Score:${score}`;
			$("#question-box").html(html);
		}

	});

});