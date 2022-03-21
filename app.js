import { renderPoll } from './render.js';

const form = document.getElementById('form');
const optionButtonOne = document.querySelector('#option-one-vote');
const optionButtonTwo = document.querySelector('#option-two-vote');
const optionMinusButtonOne = document.querySelector('#option-one-minus');
const optionMinusButtonTwo = document.querySelector('#option-two-minus');
const previousPollsEl = document.querySelector('.past-poll-results');
const endPollButton = document.getElementById('poll-end');
const pollQuest = document.getElementById('question-result');
const optOne = document.getElementById('option-one-results');
const optTwo = document.getElementById('option-two-results');
const optOneVotes = document.getElementById('option-one-vote-results');
const optTwoVotes = document.getElementById('option-two-vote-results');
const startPollButton = document.getElementById('start-poll');

//state 

let oneVotes = 0;
let twoVotes = 0;
let question = '';
let optionOne = '';
let optionTwo = '';

const pastArray = [];



form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    question = formData.get('poll-question');
    optionOne = formData.get('option-one');
    optionTwo = formData.get('option-two');
    
    displayCurrentPoll();
});

optionButtonOne.addEventListener('click', () => {
    oneVotes++;

    optOneVotes.textContent = oneVotes;
});

optionButtonTwo.addEventListener('click', () => {
    twoVotes++;

    optTwoVotes.textContent = twoVotes;
});

optionMinusButtonOne.addEventListener('click', () => {
    oneVotes--;

    optOneVotes.textContent = oneVotes;
});

optionMinusButtonTwo.addEventListener('click', () => {
    twoVotes--;

    optTwoVotes.textContent = twoVotes;
});

startPollButton.addEventListener('click', () =>{

});


endPollButton.addEventListener('click', () =>{
    form.reset();

    const pastpoll = createPoll();

    pastArray.push(pastpoll);
    resetPollState();
    displayCurrentPoll();
    displayList();
});

function displayCurrentPoll() {
    pollQuest.textContent = question;
    optOne.textContent = optionOne;
    optTwo.textContent = optionTwo;
    optOneVotes.textContent = oneVotes;
    optTwoVotes.textContent = twoVotes; 
}

function displayList(){
    previousPollsEl.textContent = '';

    for (let pastPoll of pastArray){
        const section = renderPoll(pastPoll);

        previousPollsEl.append(section);
    }
}

function createPoll() {
    return {
        question: question,
        optOne: optOne,
        optTwo: optTwo,
        oneVotes: oneVotes,
        twoVotes: twoVotes,
    };
}

function resetPollState(){
    question = '';
    optionOne = '';
    optionTwo = '';
    oneVotes = 0;
    twoVotes = 0;

}



