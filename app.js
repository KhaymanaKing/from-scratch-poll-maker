// import functions and grab DOM elementsIm

// import {renderEndPoll } from './render.js';

const plusButtonOne = document.getElementById('option-one-plus');
const plusButtonTwo = document.getElementById('option-two-plus');
const minusButtonOne = document.getElementById('option-one-minus');
const minusButtonTwo = document.getElementById('option-two-minus');
const startPollButton = document.getElementById('start-poll-button');
const endPollButton = document.getElementById('end-poll"');

const questionEl = document.getElementById('poll-question');
const optionOneEl = document.getElementById('option-one-title');
const optionOneVotesEl = document.getElementById('option-one-votes');
const optionTwoEl = document.getElementById('option-two-title');
const optionTwoVotesEl = document.getElementById('option-two-votes');

const previousPollsEl = document.getElementById('previous-polls');
// let state
let question = '';
let optionOne = '';
let optionOneVotes = 0;
let optionTwo = '';
let optionTwoVotes = 0;

let previousPoll = []; 

// set event listeners
plusButtonOne.addEventListener('click', () => {
    optionOneVotes++;
    optionOneVotesEl.textContent = optionOneVotes;
});

plusButtonTwo.addEventListener('click', () => {
    optionTwoVotes++;
    optionTwoVotesEl.textContent = optionTwoVotes;
});

minusButtonOne.addEventListener('click', () => {
    optionOneVotes--;
    optionOneVotesEl.textContent = optionOneVotes;
});

minusButtonTwo.addEventListener('click', () => {
    optionTwoVotes--;
    optionTwoVotesEl.textContent = optionTwoVotes;
});

startPollButton.addEventListener('click', () => {
    const pollQuestion = questionEl.value;
    const firstOption = optionOneEl.value;
    const secondOption = optionTwoEl.value;

    question = pollQuestion;
    optionOne = firstOption;
    optionTwo = secondOption;
    createPoll();
    createButtons();

});

function createPoll(){
    return {
        question: question,
        optionOne: optionOne,
        optionOneVotes: optionOneVotes,
        optionTwo: optionTwo,
        optionTwoVotes
    };
}
// function createButtons(){
//     var plusOne = document.createElement('button');
//     var plusOneTxt = document.createTextNode('+'); 
//     plusOne.appendChild(plusOneTxt);
//     document.body.appendChild(plusOne);
// }


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
