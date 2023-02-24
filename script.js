function setButton() {
    if (checkButtonStatus()) {
        disableButton();
    }
    else {
        enableButton();
    }
}

function disableButton() {
    document.getElementById("next-btn").disabled = true;
}

function enableButton() {
    document.getElementById("next-btn").disabled = false;
}

function checkButtonStatus() {
    return button == 0;
}

function checkAnswer(selectedAnswer) {
    let idOfRightAnswer = questionsCategory[currentQuestion]['correctAnswer'];
    if (isRightNumberSelected(selectedAnswer, idOfRightAnswer)) {
        setCorrectAnswer(selectedAnswer);
    } else {
        setWrongAnswer(selectedAnswer, idOfRightAnswer);
    }
    button = 1;
    setButton();
}

function isRightNumberSelected(selectedAnswer, idOfRightAnswer) {
    let selectedAnswerNumber = +selectedAnswer.slice(-1);
    return selectedAnswerNumber === idOfRightAnswer;
}

function setCorrectAnswer(selectedAnswer) {
    correctAnswers++;
    document.getElementById(selectedAnswer).classList.add('bg-success');
    document.getElementById(selectedAnswer).firstElementChild.classList.add('bg-success');
    correctAudio.play();
}

function setWrongAnswer(selectedAnswer, idOfRightAnswer) {
    document.getElementById(selectedAnswer).classList.add('bg-danger');
    document.getElementById('answer' + idOfRightAnswer).classList.add('bg-success');
    document.getElementById(selectedAnswer).firstElementChild.classList.add('bg-danger');
    wrongAudio.play();
}

function getAnswers() {
    let answers = document.getElementById('answers');
    answers.innerHTML = '';
    for (let i = 1; i <= 4; i++) {
        if (i == 1) {
            createAnswerDiv(i, 'A');
        } else if (i == 2) {
            createAnswerDiv(i, 'B');
        } else if (i == 3) {
            createAnswerDiv(i, 'C');
        } else {
            createAnswerDiv(i, 'D');
        }
    }
}

function createAnswerDiv(i, letter) {
    answers.innerHTML += `
    <div id="answer${i}" class="card jc-start answer-card answer-card-body mb-2" onclick="checkAnswer('answer${i}')">
        <b class="letterBox">${letter}</b>               
        <span>${replaceOpeningTag(questionsCategory[currentQuestion]['answer' + i])}</span>
    </div>
    `;
}

function getQuestion(category) {
    getClickedCategory(category);
    setQuestionCount();
    getQuestionsAmount();
    setQuestionVisible();
    if (isCurrentQBiggerAsQAmount()) {
        showEndScreen();
    } else {
        showCurrentQuestion();
        getAnswers();
    }
    setButton();
}

function isCurrentQBiggerAsQAmount() {
    return currentQuestion >= returnQuestionsAmount();
}

function showCurrentQuestion() {
    let questionString = questionsCategory[currentQuestion]['question'];
    document.getElementById('card-title').innerHTML = questionString;
}

function showEndScreen() {
    playGameOverSound();
    setEndScreenVisible();
    showCorrectAnswers();
}

function setEndScreenVisible() {
    document.getElementById('endscreen').style = 'display:flex;';
    document.getElementById('questionBody').style = 'display:none;';
}

function showCorrectAnswers() {
    let correctAnswer = document.getElementById('correctAnswer');
    let questionAmount = document.getElementById('questionAmount');
    correctAnswer.innerHTML = correctAnswers;
    questionAmount.innerHTML = returnQuestionsAmount();
}

function playGameOverSound() {
    finishedAudio.play();
}

function setStartGameScreen(category) {
    resetQuestionStartBody();
    document.getElementById('startBody').style = 'display:none !important;';
    document.getElementById('questionBody').style = 'display:none !important;';
    document.getElementById('question-startBody').style = '';
    setQuestionStartBody(category);
}

function setQuestionVisible() {
    document.getElementById('questionBody').style = '';
    document.getElementById('startBody').style = 'display:none !important;';
    document.getElementById('question-startBody').style = 'display:none !important;';
}

function setQuestionStartBody(category) {
    let questionStartBody = document.getElementById('welcome');
    questionStartBody.innerHTML += `
     <button class="btn btn-danger start-btn text-align-c" onclick="getQuestion('${category}')">START NOW <b>></b></button>
    `;
}

function resetQuestionStartBody() {
    document.getElementById('welcome').innerHTML = `
        <h5>Welcome to<br>The Awesome QuizApp</h5>
        <span>Start Your Challenge!</span>
    `;
}

function setRetryFunction(category) {
    document.getElementById('retry-btn').onclick = function () {
        restart(category);
    }
}

function restart(category) {
    resetQuestionsCategory();
    correctAnswers = 0;
    currentQuestion = 0;
    document.getElementById('endscreen').style = 'display:none !important;';
    setStartGameScreen(category);
    setRetryFunction(category);
}

function resetQuestionsCategory() {
    if (questionsCategory.length > 0) {
        while (questionsCategory.length > 0) {
            questionsCategory.pop();
        }
    }
}

function getQuestionsAmount() {
    let questionAmount = 0;
    for (let i = 0; i < questionsCategory.length; i++) {
        questionAmount++;
    }
    document.getElementById('question-amount').innerHTML = questionAmount;
}

function getClickedCategory(category) {
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        if (isQuestionsCategory(question, category)) {
            questionsCategory.push(question);
        }
    }
}

function isQuestionsCategory(question, category) {
    return question['category'] == category;
}

function returnQuestionsAmount() {
    let questionAmount = 0;
    for (let i = 0; i < questionsCategory.length; i++) {
        questionAmount++;
    }
    return questionAmount;
}

function nextQuestion(category) {
    button = 0;
    currentQuestion++;
    getQuestion(category);
    setButton();
    setQuestionCount();
}

function setQuestionCount() {
    let questionCount = document.getElementById('question-count');
    questionCount.innerHTML = currentQuestion + 1;
}

function replaceOpeningTag(text) {
    return text.replace('<', '&lt;');
}