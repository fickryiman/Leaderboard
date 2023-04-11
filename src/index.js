import './style.css';
import Scores from '../modules/scoresList.js';
// import ScoreAdd from '../modules/scoreAdd.js';

const refreshButton = document.querySelector('.refresh-button');
const formInput = document.querySelector('.form-input');

refreshButton.addEventListener('click', Scores.renderScores);

// document.addEventListener('DOMContentLoaded', ScoreAdd.renderScoreAdd);
formInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;

  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hs3Uvn8oXxiNOYVsoXdL/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => {
    return response.json();
  })
  .catch(error => {
    console.error('Error', error);
  })
  
  formInput.reset();
});