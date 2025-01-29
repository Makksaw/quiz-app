const startQuizBtn = document.querySelector('.main-btn');
const exitQuizBtn = document.querySelector('.popup-exit-btn');
const continueQuizBtn = document.querySelector('.popup-continue-btn');
const popup = document.querySelector('.popup-info');
const main = document.querySelector('.main');
const nav = document.querySelector('.nav');

startQuizBtn.addEventListener('click', () => {
    popup.classList.add('active');
    nav.classList.add('blur');
    main.classList.add('blur');
});

exitQuizBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    nav.classList.remove('blur');
    main.classList.remove('blur');
});

continueQuizBtn.addEventListener('click', () => {
    popup.classList.add('fade-out');
    setTimeout(() => {
        popup.classList.remove('active', 'fade-out');
    }, 200);
});
