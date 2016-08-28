define(function () {
    var SpriteAnimation = function (currentState, animationStates) {
        this.type = "spriteAnimation";
        this.currentState = currentState;
        this.animationStates = animationStates;
    };

    return SpriteAnimation;
});
