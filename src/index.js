import './style.css';
import Scores from '../modules/scoresList.js';
import ScoreAdd from '../modules/scoreAdd.js';

document.addEventListener('DOMContentLoaded', Scores.renderScores);
document.addEventListener('DOMContentLoaded', ScoreAdd.renderScoreAdd);
