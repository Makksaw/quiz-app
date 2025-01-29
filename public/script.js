const startQuizBtn = document.querySelector('.main-btn');
const exitQuizBtn = document.querySelector('.popup-exit-btn');
const continueQuizBtn = document.querySelector('.popup-continue-btn');
const popupInfo = document.querySelector('.popup-info');
const popupQuiz = document.querySelector('.popup-quiz');
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
