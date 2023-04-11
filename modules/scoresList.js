const datas = document.querySelector('.datas');
const Scores = {
  renderScores: () => {
    const getDataFromAPI = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hs3Uvn8oXxiNOYVsoXdL/scores/");
      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject("File not Found");
        }
      };
      request.send();
    });

    getDataFromAPI.then((value) => {
      let scoresData = JSON.parse(value).result;
      scoresData.sort((a, b) => {
        return b.score - a.score;
      })
      datas.innerHTML = scoresData.map((scoreData, index) => `
        <li class="data">${scoreData.user}: ${scoreData.score}</li>
      `).join('');
    });
    

  },
};

export default Scores;
