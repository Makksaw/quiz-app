const startQuizBtn = document.querySelector('.main-btn');
const exitQuizBtn = document.querySelector('.popup-exit-btn');
const continueQuizBtn = document.querySelector('.popup-continue-btn');
const nextQuizBtn = document.querySelector('.popup-next-btn');
const closeResultBtn = document.querySelector('.popup-close-btn');
const reloadBtn = document.querySelector('.popup-reload-btn');

const popupInfo = document.querySelector('.popup-info');
const popupQuiz = document.querySelector('.popup-quiz');
const popupResult = document.querySelector('.popup-result');
const popupReload = document.querySelector('.popup-reload');

const popupScore = document.querySelector('.popup-quiz-score');
const popupQuestionNum = document.querySelector('.popup-question-number');

const popupQuestion = document.querySelector('.popup-question');
const popupAnswers = document.querySelectorAll('.popup-answer');

const popupPercentage = document.querySelector('.popup-result-percentage');

const main = document.querySelector('.main');
const nav = document.querySelector('.nav');

startQuizBtn.addEventListener('click', () => {
    popupInfo.classList.add('active');
    nav.classList.add('blur');
    main.classList.add('blur');
});

exitQuizBtn.addEventListener('click', () => {
    popupInfo.classList.remove('active');
    nav.classList.remove('blur');
    main.classList.remove('blur');
});

continueQuizBtn.addEventListener('click', () => {
    popupInfo.classList.add('fade-out');
    setTimeout(() => {
        popupInfo.classList.remove('active', 'fade-out');
        popupQuiz.classList.add('active', 'fade-in');
    }, 300);
});

closeResultBtn.addEventListener('click', () => {
    popupResult.classList.remove('active');
    popupReload.classList.add('active');
});

reloadBtn.addEventListener('click', () => {
    window.location.href = '/';
});

const questions = [
    {
        number: 1,
        question: 'What does HTML stand for?',
        answer: 'C. Hyper Text Markup Language',
        options: [
            'A. Hyper Type Multi Language',
            'B. Hyper Text Multiple Language',
            'C. Hyper Text Markup Language',
            'D. Home Text Multi Language',
        ],
    },
    {
        number: 2,
        question: 'What does CSS stand for?',
        answer: 'A. Cascading Style Sheet',
        options: [
            'A. Cascading Style Sheet',
            'B. Cute Style Sheet',
            'C. Computer Style Sheet',
            'D. Code Style Sheet',
        ],
    },
    {
        number: 3,
        question: 'What does PHP stand for?',
        answer: 'A. Hypertext Preprocessor',
        options: [
            'A. Hypertext Preprocessor',
            'B. Hometext Programming',
            'C. Hypertext Preprogramming',
            'D. Programming Hypertext Preprocessor',
        ],
    },
    {
        number: 4,
        question: 'What does SQL stand for?',
        answer: 'D. Structured Query Language',
        options: [
            'A. Strength Query Language',
            'B. Stylesheet Query Language',
            'C. Science Question Language',
            'D. Structured Query Language',
        ],
    },
    {
        number: 5,
        question: 'What does XML stand for?',
        answer: 'D. Extensible Markup Language',
        options: [
            'A. Excellent Multiple Language',
            'B. Explore Multiple Language',
            'C. Extra Markup Language',
            'D. Extensible Markup Language',
        ],
    },
];

let score = 0;
let maxScore = (maxQuestionNum = 0);

let questionNum = 1;

for (let i = 0; i < questions.length; i++) {
    maxScore++;
    maxQuestionNum++;
}

function displayQuestionAndAnswers(
    arr = questions,
    currentQuestion = questionNum
) {
    arr.forEach((task, taskIndex) => {
        if (currentQuestion - 1 === taskIndex) {
            if (currentQuestion === maxQuestionNum) {
                nextQuizBtn.textContent = 'Submit';
            } else {
                nextQuizBtn.textContent = 'Next';
            }

            popupQuestion.textContent = task.question;

            popupAnswers.forEach((answer, answerIndex) => {
                answer.textContent = task.options[answerIndex];
            });

            popupScore.textContent = `Score: ${score}/${maxScore}`;
            popupQuestionNum.textContent = `${currentQuestion} of ${maxQuestionNum} Questions`;

            nextQuizBtn.disabled = true;
        }
    });

    answered = false;
}

let answered = false;

function clickAnswer() {
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-answer') && !answered) {
            answered = true;
            nextQuizBtn.disabled = false;

            if (
                e.target.textContent.trim() ===
                questions[questionNum - 1].answer
            ) {
                score++;
            }
        }
    });
}

clickAnswer();

nextQuizBtn.addEventListener('click', () => {
    questionNum++;

    if (questionNum > maxQuestionNum) {
        popupQuiz.classList.add('fade-out');
        quizResult();

        setTimeout(() => {
            popupQuiz.classList.remove('active', 'fade-out');
            popupResult.classList.add('active', 'fade-in');
        }, 300);
    } else {
        displayQuestionAndAnswers();
    }
});

function quizResult() {
    const result = (100 / maxQuestionNum) * score;
    popupPercentage.textContent = `${result}%`;
}

displayQuestionAndAnswers();
