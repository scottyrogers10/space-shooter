define(function () {
    var Sprite = function (config) {
        config = config || {};

        this.type = "sprite";
        this.img = config.img;
        this.srcX = config.srcX;
        this.srcY = config.srcY;
        this.srcW = config.srcW;
        this.srcH = config.srcH;
    };

    return Sprite;
});
