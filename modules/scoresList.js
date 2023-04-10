const Scores = {
  renderScores: () => {
    const scores_list = document.querySelector('.scores-list');
    scores_list.innerHTML = `
      <div class="scores-list-header">
        <h2 class="recent-scores">Recent Scores</h2>
        <button class="refresh-button" onclick="location.reload()">Refresh</button>
      </div>
      <div class="scores-list-data">
        <ul class="datas">
          <li class="data">Name: 100</li>
          <li class="data">Name: 20</li>
          <li class="data">Name: 50</li>
          <li class="data">Name: 78</li>
          <li class="data">Name: 125</li>
          <li class="data">Name: 77</li>
          <li class="data">Name: 42</li>
        </ul>
      </div>
    `
  }
};

export default Scores;
