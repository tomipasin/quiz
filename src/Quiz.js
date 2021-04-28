//vou usar o hook de usestate para armazenar os resultados equanto o aluno for respondendo. 
import React, { useState } from 'react';

//Renan, criei uma função default aqui pra tu ver como usa ela depois, incluindo como 
//um módulo, talvez... 
export default function Quiz() {
	//aqui as questões em formato de objeto JS. Coloca quantas quiser.
	//vou usar inglês por padronização.
	const questions = [
		{
			questionText: 'Qual é a capital do RS???',
			answerOptions: [
				{ answerText: 'João Pessoa', isCorrect: false },
				{ answerText: 'Porto Alegre', isCorrect: true },
				{ answerText: 'Barbacena', isCorrect: false },
				{ answerText: 'Belo Horizonte', isCorrect: false },
			],
		},
		{
			questionText: 'Quem é o melhor programador???',
			answerOptions: [
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tomi Pasin', isCorrect: true },
				{ answerText: 'Mark Zuckenberg', isCorrect: false },
				{ answerText: 'Steve Jobs', isCorrect: false },
			],
		},
		{
			questionText: 'Qual a empresa que está desenvolvendo uma universidade para seus colaboradores???',
			answerOptions: [
				{ answerText: 'Unimed', isCorrect: false },
				{ answerText: 'Rota Seguros', isCorrect: true },
				{ answerText: 'Metlife', isCorrect: false },
				{ answerText: 'Porto Seguro', isCorrect: false },
			],
		},
	];

	//aqui podemos usar o score para armazenar os dados de cada aluno no seu registro.
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	var COI;
	//aqui é o seguinte: ao clicar em uma resposta o código verifica se a chave 
	//iscorrect daquela entrada é true. se for adiciona 1 ao score.
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			COI = 'correct'
		}
	}

	//aqui vamos para apróxima questão até o limite de questões. 
	const nextQuestion = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			//se for a última executa a função de mostrar score. 
			setShowScore(true);
		}
	};

	//tudo isso retornará o seguinte:
	return (
		<>
			<div className='quiz'>
				{/* usando ternário fazemos o seguinte: se showscore for true mostra a div 
			de score-section ou então mostra a próxima pergunta. */}
				{showScore ? (
					<div className='score-section'>
						Tu acertou {score} de {questions.length} questões
						{showScore}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Pergunta {currentQuestion + 1}</span> de {questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							<>
								{questions[currentQuestion].answerOptions.map((answerOption) => (
									<button className="buttonOK" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
										{answerOption.answerText}
									</button>
								))}
							</>
						</div>
					</>
				)}
			</div>
			<div>
				<br></br>
				<button id="next" className="but" onClick={() => nextQuestion()}>Próxima pergunta</button>
			</div>

		</>

	);
}
