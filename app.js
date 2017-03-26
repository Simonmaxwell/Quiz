
var quiz = {
		name:"plant biology",
		questions: [
			{
				question: "Flowering plants are all members of which group?",
				answers: ["Angiospermae","Gymnospermae","Somuchspermae","Florophyta"],
				correctAnswer: 0
			},
			{
				question: "The green light capturing organelles in plant cells are called?",
				answers: ["Plasmodesmata","Ribosomes","Chloroplasts","Photofores"],
				correctAnswer: 2
			},
			{
				question: "A life-cycle consisting of a haploid sexual phase and a diploid asexual phase is known as?",
				answers: ["Homozygotic","Metagenesis","Kinky","Tuesday"],
				correctAnswer: 1
			}
		]
	}

$(document).ready(function(){
	var currentQuestion = 0;
	var score = 0;

	const showQuestion = () => {
		var html = '';
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