const quizData = [
		{
			question: "Pemain Sepak Bola terbaik di dunia?",
			a : "bambang",
			b : "mbape",
			c : "ronaldo",
			correct: "c",
		}, {
			question: "Juara piala dunia tahun 2018?",
			a : "indonesia",
			b : "malaysia",
			c : "france",
			correct: "c",
		}, {
			question: 'Tuan Rumah piala euro 2020?',
			a : 'ghana',
			b : 'inggris',
			c : 'portugal',
			correct: "b"
		}, {
			question: "Salah satu pemain inggris?",
			a : "rooney",
			b : "mbape",
			c : "neymar",
			correct: "a",
		}, {
			question: "Top score liga italia musim 2018/2020?",
			a : "ronaldo",
			b : "messi",
			c : "mbape",
			correct: "a",
		},

	];

	const quiz = document.getElementById("quiz");
	const answerEls = document.querySelectorAll(".answer");
	const questionEl = document.getElementById("question");
	const a_text = document.getElementById("a_text");
	const b_text = document.getElementById("b_text");
	const c_text = document.getElementById("c_text");
	const submitBtn = document.getElementById("submit");

	let currentQuiz = 0;
	let score = 0;

	loadQuiz();

	function loadQuiz() {
		deselectAnswers();

		const currentQuizData = quizData[currentQuiz];

		questionEl.innerText = currentQuizData.question;
		a_text.innerText = currentQuizData.a;
		b_text.innerText = currentQuizData.b;
		c_text.innerText = currentQuizData.c;
			
}

function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			 answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
		const answer = getSelected();

		if (answer) {
			if (answer == quizData[currentQuiz] . correct) 
			{
				score++;
			}
		
		currentQuiz++;
	    if (currentQuiz < quizData.length) {
	 		loadQuiz();
		 } else {
		 	quiz.innerHTML = `
		 	<h2> You answered corrctly at $
		 	{score} / ${quizData.length} 
		 	questions.<h2>

		 	<button onclick="location.reload()
		 	">Reload</button> 
		 	`;
		 }
	}
});
