const form = document.querySelector('form');

const startPollButton = document.getElementById ('start-poll');
const voteOneButton = document.getElementById('option-one-vote');
const minusVoteOneButton = document.getElementById('option-one-mins');
const voteTwoButton = document.getElementById('option-two-vote');
const minusVoteTwoButton = document.getElementById('option-two-minus');
const endPollButton = document.getElementById('poll-end');

const questionEl = document.getElementById('question-result');
const optionOneEl = document.getElementById('option-one-input');
const optionOneVotesEl = document.getElementById('option-one-votes-result');
const optionTwoEl = document.getElementById('option-two-input');
const optionTwoVotesEl = document.getElementById('option-two-votes-result');

const pastPollResults = document.getElementById('past-poll-results');

//state
let optionOneVotes = 0;
let optionTwoVotes = 0;
let optionOne = '';
let optionTwo = '';
let pollQuestion = '';
const pastPolls = [];


voteOneButton.addEventListener('click', () =>{
    optionOneVotes++;
    optionOneVotesEl.textContent = optionOneVotes;
});

voteTwoButton.addEventListener('click', () =>{
    optionTwoVotes++;
    optionTwoVotesEl.textContent = optionTwoVotes;
});

minusVoteOneButton.addEventListener('click', () =>{
    optionOneVotes--;
    optionOneVotesEl.textContent = optionOneVotes;
});

minusVoteTwoButton.addEventListener('click', () =>{
    optionTwoVotes--;
    optionTwoVotesEl.textContent = optionTwoVotes;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);

    pollQuestion = data.get('poll-question');
    optionOne = data.get('option-one');
    optionTwo = data.get('option-two');
});