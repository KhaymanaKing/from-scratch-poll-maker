const form = document.querySelector('form');

const optionButtonOne = document.querySelector('#option-one-vote');
const optionButtonTwo = document.querySelector('#option-two-vote');
const optionMinusButtonOne = document.querySelector('#option-one-minus');
const optionMinusButtonTwo = document.querySelector('#option-two-minus');
const pastpollsEl = document.querySelector('.past-poll-results');
const endPoll = document.querySelector('#poll-end');
const pollQuest = document.querySelector('.poll-question');
const optOne = document.queryCommandValue('.option-one');
const optTwo = document.queryCommandValue('.option-two');
const optOneVotes = document.querySelector('#option-one-votes-result');
const optTwoVotes = document.querySelector('#option-two-votes-result');


//state 

let oneVotes = 0;
let twoVotes = 0;
let question = '';
let optionOne = '';
let optionTwo = '';

const pastArray = [];

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
    oneVotes--;

    optTwoVotes.textContent = twoVotes;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    quest = data.get('poll-question');
    optOne = data.get('option-one');
    optTwo = data.get('option-two');
    

});



closePollButton.addEventListener('click', () => {
    form.reset();

    const poll = formPoll();

    previousPoll
})

function formPoll() {
    return{
        quest: quest;
        optOne: optOne; 
        optTwo: optTwo;
        oneVotes: oneVotes;
        twoVotes: twoVotes;
    };
}

