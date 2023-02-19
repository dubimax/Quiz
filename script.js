let html = [{
    'question': 'Wer hat HTML erfunden?',
    'answer1': 'Robbie Williams',
    'answer2': 'Lady Gaga',
    'answer3': 'Tim Berners Lee',
    'answer4': 'Justin Bieber',
    'correctAnswer': 3
},
{
    'question': 'Welches Tag wird für die größte HTML-Überschrift verwendet?',
    'answer1': '<headline>',
    'answer2': '<h1>',
    'answer3': '<head>',
    'answer4': '<h6>',
    'correctAnswer': 2
},
{
    'question': 'Wie öffnet man einen Link in einem neuen Tab?',
    'answer1': '<a href="www.google.de" target="_blank">',
    'answer2': '<a href="www.google.de" target="new">',
    'answer3': '<a href="www.google.de" newTab>',
    'answer4': '<a href="www.google.de _new">',
    'correctAnswer': 1
},
{
    'question': 'Wer hat CSS erfunden?',
    'answer1': 'Elon Musk',
    'answer2': 'Bill Gates',
    'answer3': 'Jackie Chan',
    'answer4': 'Hakon Wium Lie',
    'correctAnswer': 4
},
{
    'question': 'Wer hat HTML erfunden?',
    'answer1': 'Robbie Williams',
    'answer2': 'Lady Gaga',
    'answer3': 'Tim Berners Lee',
    'answer4': 'Justin Bieber',
    'correctAnswer': 3
}
];

let currentQuestion = 0;
let button = 0;
let correctAnswers = 0;

function setButton() {
    if (button == 0) {
        document.getElementById("next-btn").disabled = true;
    }
    else {
        document.getElementById("next-btn").disabled = false;
    }
}

function checkAnswer(selectedAnswer, array) {
    let selectedAnswerNumber = selectedAnswer.slice(-1);
    let idOfRightAnswer = array[currentQuestion]['correctAnswer'];
    if (selectedAnswerNumber == idOfRightAnswer) {
        correctAnswers++;
        document.getElementById(selectedAnswer).classList.add('bg-success');
    } else {
        document.getElementById(selectedAnswer).classList.add('bg-danger');
        document.getElementById('answer' + idOfRightAnswer).classList.add('bg-success');
    }
    button = 1;
    setButton();
}

function getAnswers(array) {
    let answers = document.getElementById('answers');
    answers.innerHTML = '';

    for (let i = 1; i < array.length; i++) {
        answers.innerHTML += `
        <div id="answer${i}" class="answer-card mb-2" onclick="checkAnswer('answer${i}', html)">
                    <div class="card-body" >
                       <span><pre><code>${replaceOpeningTag(array[currentQuestion]['answer' + i])}</code></pre></span>
                    </div>
                </div>
        `;
    }
}

function getQuestion(array) {
    getQuestionsAmount(array);
    setQuestionVisible();
    if (currentQuestion >= array.length) {
        let correctAnswer = document.getElementById('correctAnswer');
        let questionAmount = document.getElementById('questionAmount');
        document.getElementById('endscreen').style = '';
        document.getElementById('questionBody').style = 'display:none';
        currentQuestion = 0;
        correctAnswer.innerHTML = correctAnswers;
        questionAmount.innerHTML = array.length;
    } else {
        let question = document.getElementById('card-title');
        let questionString = array[currentQuestion]['question'];
        question.innerHTML = questionString;
        getAnswers(array);
    }
    setButton();
}

function setQuestionVisible() {
    document.getElementById('questionBody').style = '';
    document.getElementById('startBody').style = 'display:none !important';
}

function getQuestionsAmount(array) {
    let amount = document.getElementById('question-amount');
    amount.innerHTML = array.length;
}

function nextQuestion() {
    button = 0;
    currentQuestion++;
    getQuestion(html);
    setButton();
    let questionCount = document.getElementById('question-count');
    questionCount.innerHTML = currentQuestion + 1;
}

function replaceOpeningTag(text) {

    return text.replace('<', '&lt;');
}