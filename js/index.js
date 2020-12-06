

const navToggle = document.querySelector('.nav-toggle');
const navtest = document.querySelector('.logo');

navtest.addEventListener('click', () => {
    console.log("pressed");
    document.body.classList.toggle('nav-open');
});

