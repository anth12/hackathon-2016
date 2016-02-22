
module.exports = function(id, name) {
    this.Id = id;
    this.Name = name;
    
    // Array of UserSession's
    this.Sessions = [];
    
    // Array of Achievement's (strings)
    this.Achievements = [];
}