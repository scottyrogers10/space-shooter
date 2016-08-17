define(function () {
    var Physics = function (config) {
        this.velocityX = config.velocityX;
        this.velocityY = config.velocityY;
        this.accelerationX = config.accelerationX;
        this.accelerationY = config.accelerationY;
        this.force = config.force;
    };

    return Physics;
});
