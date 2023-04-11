import './style.css';
import Scores from '../modules/scoresList.js';
import ScoreAdd from '../modules/scoreAdd.js';

const refreshButton = document.querySelector('.refresh-button');

refreshButton.addEventListener('click', Scores.renderScores);

document.addEventListener('DOMContentLoaded', ScoreAdd.renderScoreAdd);
