
module.exports = function(urlCode, name, backgroundImage) {
    this.UrlCode = urlCode;
    this.Name = name;
    this.PreviewImage = backgroundImage;
    this.BackgroundImage = backgroundImage;

    this.Sound = [];
    this.ProjectileImage = null;
    this.UserDefined = false;
}