var sessionsValidFor = 7; // Days

module.exports = function(clientId, ipAddress) {
    this.ClientId = clientId;
    this.IpAddress = ipAddress;
    
    var validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + sessionsValidFor);

    this.ValidUntil = validUntil;
}