var scorekeeper = document.querySelector("#scorekeeper");

var highScores = localStorage.getItem("highScores");
highScores = JSON.parse(highScores);

if (highScores) {
    for (var i = 0; i < highScores.length; i++) {
        var leaderboard = document.createElement("li");
        leaderboard.textContent = highScores[i].initials + " - " + highScores[i].score;
        scorekeeper.appendChild(leaderboard);
    }
}