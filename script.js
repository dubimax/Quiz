let questions = [{
    'question':'Wer hat HTML erfunden?',
    'answer1':'Robbie Williams',
    'answer2':'Lady Gaga',
    'answer3':'Tim Berners Lee',
    'answer4':'Justin Bieber',
    'correctAnswer':3 
},
{
    'question':'Welches Tag wird für die größte HTML-Überschrift verwendet?',
    'answer1':'<headline>',
    'answer2':'<h1>',
    'answer3':'<head>',
    'answer4':'<h6>',
    'correctAnswer':2 

},
{
    'question':'Wie öffnet man einen Link in einem neuen Tab?',
    'answer1':'<a href="www.google.de" target="_blank">',
    'answer2':'<a href="www.google.de" target="new">',
    'answer3':'<a href="www.google.de" newTab>',
    'answer4':'<a href="www.google.de _new">',
    'correctAnswer':1 
},
{
    'question':'Wer hat CSS erfunden?',
    'answer1':'Elon Musk',
    'answer2':'Bill Gates',
    'answer3':'Jackie Chan',
    'answer4':'Hakon Wium Lie',
    'correctAnswer':4 
},
{
    'question':'Wer hat HTML erfunden?',
    'answer1':'Robbie Williams',
    'answer2':'Lady Gaga',
    'answer3':'Tim Berners Lee',
    'answer4':'Justin Bieber',
    'correctAnswer':3 
}

];

let currentQuestion = 0;

function init(){
    getQuestionsAmount();
    getQuestion();

}

function checkAnswer(selectedAnswer){
    let question =  questions[currentQuestion];
    let selectedAnswerNumber = selectedAnswer.slice(-1); 
    let idOfRightAnswer = 'answer' + question['correctAnswer'];
    if(selectedAnswerNumber == question['correctAnswer']){
        console.log('Richtig');
        document.getElementById(selectedAnswer).classList.add('bg-success');
    }else{
        console.log('Falsch');
        document.getElementById(selectedAnswer).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');

    }
}

function getAnswers(){
    let answers = document.getElementById('answers');
    answers.innerHTML = '';

    for (let i = 1; i < questions.length; i++) {
        const answer = questions[currentQuestion];
        let text = answer['answer'+i];
        answers.innerHTML += `
        <div id="answer${i}" class="card answer-card mb-2" onclick="checkAnswer('answer${i}')">
                    <div class="card-body" >
                    
                       <span>${text}</span>
                       
                    </div>
                </div>
        `;
        
    }
}

function getQuestion(){
    let question = document.getElementById('card-title');
    let questionString = questions[0]['question'];
    question.innerHTML = `
    
        ${questionString}
    `;
    getAnswers(0);
}



function getQuestionsAmount(){
    let amount = document.getElementById('question-amount');
    amount = `
        ${questions.length+1}
    `;

}