const controls = document.querySelector('.controls');

const btnYes = document.querySelector('#btn1');
const btnOfCourse = document.querySelector('#btn2');
const btnNotYet = document.querySelector('#btn3');

let voteYes = document.querySelector('#value1');
let voteOfCourse = document.querySelector('#value2');
let voteNotYet = document.querySelector('#value3');

let click = false;

controls.addEventListener('click', (e) => {
    
    if(click ===  false) {
        if(e.target === btnYes){
        upScore(voteYes);
        saveVote('yes');   
        }else if(e.target === btnOfCourse) {
            upScore(voteOfCourse); 
            saveVote('ofCourse'); 
        }else if(e.target === btnNotYet){
            upScore(voteNotYet);
            saveVote('notYet');
        }else {}

        click = true;  
    }

});

const upScore = (vote) => {
    vote.innerHTML++;
    vote.textContent = vote.innerHTML;    
};

const saveVote = (x) => {
    if (typeof(Storage) !== "undefined") {
        if (localStorage[x]) {
        localStorage[x] = Number(localStorage[x])+1;
        } else {
        localStorage[x] = 1;
        }
    }   
};

const chechVotes = (x) => {
    let number = localStorage.getItem(x);
    if(number === null){
        localStorage.setItem(x, 0);
    }else{} 

    voteNotYet.innerHTML = localStorage.notYet
    voteOfCourse.innerHTML = localStorage.ofCourse
    voteYes.innerHTML = localStorage.yes
};

chechVotes('yes');  
chechVotes('ofCourse');     
chechVotes('notYet');