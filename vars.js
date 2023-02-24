let questions = [{
    'category': 'html',
    'question': 'Was ist das HTML-Element, das verwendet wird, um eine Zeile in einer Tabelle in einer Webseite zu definieren?',
    'answer1': '<row>',
    'answer2': '<tr>',
    'answer3': '<line>',
    'answer4': '<tabular>',
    'correctAnswer': 2
},
{
    'category': 'html',
    'question': 'Welches Tag wird für die größte HTML-Überschrift verwendet?',
    'answer1': '<headline>',
    'answer2': '<h1>',
    'answer3': '<head>',
    'answer4': '<h6>',
    'correctAnswer': 2
},
{
    'category': 'html',
    'question': 'Wie öffnet man einen Link in einem neuen Tab?',
    'answer1': '<a href="www.google.de" target="_blank">',
    'answer2': '<a href="www.google.de" target="new">',
    'answer3': '<a href="www.google.de" newTab>',
    'answer4': '<a href="www.google.de _new">',
    'correctAnswer': 1
},
{
    'category': 'html',
    'question': 'Was beudetet die Abkürzung HTML?',
    'answer1': 'Hover Text Multi Language',
    'answer2': 'Hover Text Markup Language',
    'answer3': 'Hyper Text Multi Language',
    'answer4': 'Hyper Text Markup Language',
    'correctAnswer': 4

},
{
    'category': 'html',
    'question': 'Wer hat HTML erfunden?',
    'answer1': 'Robbie Williams',
    'answer2': 'Lady Gaga',
    'answer3': 'Tim Berners Lee',
    'answer4': 'Justin Bieber',
    'correctAnswer': 3
},
{
    'category': 'css',
    'question': 'Wer hat CSS erfunden?',
    'answer1': 'Elon Musk',
    'answer2': 'Bill Gates',
    'answer3': 'Jackie Chan',
    'answer4': 'Hakon Wium Lie',
    'correctAnswer': 4
},
{
    'category': 'html',
    'question': 'Welches Attribut wird verwendet, um den alternativen Text für ein <img>-Element anzugeben?',
    'answer1': 'alt',
    'answer2': 'src',
    'answer3': 'title',
    'answer4': 'href',
    'correctAnswer': 1
},
{
    'category': 'css',
    'question': 'Was ist der Zweck der Eigenschaft "opacity" in CSS?',
    'answer1': 'Um die Größe eines Elements zu ändern.',
    'answer2': 'Um die Farbe eines Elements zu ändern.',
    'answer3': 'Um die Transparenz eines Elements zu definieren.',
    'answer4': 'Um die Schriftart eines Elements zu definieren.',
    'correctAnswer': 3
},
{
    'category': 'css',
    'question': 'Was ist der Zweck der Eigenschaft "box-shadow" in CSS?',
    'answer1': 'Um einen Schatten um ein Element zu erzeugen.',
    'answer2': 'Um die Form eines Elements zu ändern.',
    'answer3': 'Um die Transparenz eines Elements zu definieren.',
    'answer4': 'Um den Inhalt eines Elements zu definieren.',
    'correctAnswer': 1
},
{
    'category': 'css',
    'question': 'Was ist der Unterschied zwischen "margin" und "padding" in CSS?',
    'answer1': '"margin" definiert den Abstand zwischen den Rändern eines Elements und anderen Elementen, "padding" definiert den Abstand zwischen dem Inhalt eines Elements und dessen Rand.',
    'answer2': '"margin" definiert den Abstand zwischen dem Inhalt eines Elements und dessen Rand, "padding" definiert den Abstand zwischen den Rändern eines Elements und anderen Elementen.',
    'answer3': '"margin" und "padding" sind synonyme Begriffe in CSS.',
    'answer4': '"margin" und "padding" definieren beide den Abstand zwischen dem Inhalt eines Elements und dessen Rand.',
    'correctAnswer': 1
},
{
    'category': 'html',
    'question': 'Welches HTML-Element wird verwendet, um eine numerische Eingabeaufforderung in einer Webseite zu erstellen?',
    'answer1': '<input type="number">',
    'answer2': '<input type="text">',
    'answer3': '<input type="range">',
    'answer4': '<input type="checkbox">',
    'correctAnswer': 1
},
{
    'category': 'html',
    'question': 'Welches HTML-Element wird verwendet, um ein Textfeld in einer Webseite zu erstellen?',
    'answer1': '<input type="text">',
    'answer2': '<input type="password">',
    'answer3': '<input type="email">',
    'answer4': '<input type="url">',
    'correctAnswer': 1
}
];

let currentQuestion = 0;
let button = 0;
let correctAnswers = 0;
let questionsCategory = [];
let correctAudio = new Audio('audio/correct.mp3');
let wrongAudio = new Audio('audio/wrong.mp3');
let finishedAudio = new Audio('audio/finished.mp3');