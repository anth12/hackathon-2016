
module.exports = function(userId, gameId) {
    this.UserId = userId;
    this.GameId = gameId;

    this.TotalLaunches = 0;
    this.TotalPoints = 0;

    this.GameState = {};
}