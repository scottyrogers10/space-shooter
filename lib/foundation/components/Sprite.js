define(function () {
    var Sprite = function (config) {
        this.img = config.img;
        this.srcX = config.srcX;
        this.srcY = config.srcY;
        this.srcW = config.srcW;
        this.srcH = config.srcH;
    };

    return Sprite;
});
