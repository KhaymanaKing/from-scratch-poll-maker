export function renderPoll(pastPoll){
    const section = document.createElement('section');
    const h3 = document.createElement('h3');
    const pTagOne = document.createElement('p');
    const pTagTwo = document.createElement('p');
    const optOneVotes = document.createElement('p');
    const optTwoVotes = document.createElement('p');
    
    section.classList.add('past-results');
    h3.textContent = pastPoll.question;
    pTagOne.textContent = pastPoll.optOne;
    pTagTwo.textContent = pastPoll.optTwo;
    optOneVotes.textContent = pastPoll.oneVotes;
    optTwoVotes.textContent = pastPoll.twoVotes;

    section.append(h3, pTagOne, pTagTwo, optOneVotes, optTwoVotes);

    return section;
}