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