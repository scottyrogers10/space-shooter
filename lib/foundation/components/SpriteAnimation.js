define(function () {
    var SpriteAnimation = function (states, modulus) {
        this.type = "SpriteAnimation";
        this.states = states;
        this.modulus = modulus;
    };

    return SpriteAnimation;
});
