
module.exports = function(userId, gameId) {
    this.UserId = userId;
    this.GameId = gameId;
    
    // Total number of Launches in the Game Board
    this.TotalLaunches = 0;
    
    // Total number of points in the Game Board
    this.TotalPoints = 0;
    
    // Highest number of points achieved on the Game Board
    this.HighestPoints = 0;
    
    // Current number of points on the Game Board
    this.CurrentPoints = 0;

    this.GameState = {};
}