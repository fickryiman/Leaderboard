const ScoreAdd = {
  renderScoreAdd: () => {
    const inputScore = document.querySelector('.input-score');
    inputScore.innerHTML = `
      <h2>Add your score</h2>
      <div>
        <form action="" class="form-input">
          <input type="text" name="name" id="" placeholder="Your name">
          <input type="text" name="score" id="" placeholder="Your score">
          <input type="submit" value="Submit">
        </form>
      </div>
    `;
  },
};

export default ScoreAdd;
