var urls = ['main.html', 'about', 'volunteer-opp', 'org'];
var navs = document.getElementsByClassName('nav');
var main = document.createElement('iframe');
var main_text = document.getElementById('main_text');
var profile = document.getElementById('profile');


function next(page){
    main.id = 'iframe';
    document.body.appendChild(main);
    main_text.style.display = 'none';
    main.style.display = 'block'
    main.src = page;
}

function homes(){
    main_text.style.display = 'block';
    main.style.display = 'none';   
}

const inactivityTime = 1 * 60 * 1000; // 10 minutes in milliseconds
let timeout;

const startTimer = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => location.reload(), inactivityTime);
};

document.addEventListener('mousemove', startTimer);
document.addEventListener('keypress', startTimer);
document.addEventListener('click', startTimer);

startTimer();