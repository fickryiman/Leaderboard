const datas = document.querySelector('.datas');
const Scores = {
  renderScores: () => {
    const getResponse = async() => {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hs3Uvn8oXxiNOYVsoXdL/scores/',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    }

    getResponse().then((data) => {
      const scoresData = data.result;
      // sort by score
      scoresData.sort((a, b) => b.score - a.score);
      datas.innerHTML = scoresData.map((game) => `
        <li class="data">${game.user}: ${game.score}</li>
      `).join('');
    });
  },
};

export default Scores;
