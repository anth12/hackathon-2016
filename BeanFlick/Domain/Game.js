
module.exports = function(urlCode, name, backgroundImage) {
    this.UrlCode = urlCode;
    this.Name = name;
    this.PreviewImage = backgroundImage;
    this.BackgroundImage = backgroundImage;

    this.MouthLeft  = { X: 0, Y: 0 };
    this.MouthRight = { X: 0, Y: 0 };

    this.Sound = [];
    this.ProjectileImage = null;
    this.UserDefined = false;
}