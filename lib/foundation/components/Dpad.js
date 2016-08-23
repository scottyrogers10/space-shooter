define(function () {
    var DPad = function (config) {
        this.type = "dpad";
        this.directions = {
            left: config.left,
            up: config.up,
            right: config.right,
            down: config.down
        };
    };

    return DPad;
});
