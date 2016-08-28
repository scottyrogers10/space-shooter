define(function () {
<<<<<<< HEAD
    var SpriteAnimation = function (currentState, animationStates) {
        this.type = "spriteAnimation";
        this.currentState = currentState;
        this.animationStates = animationStates;
=======
    var SpriteAnimation = function (states, modulus) {
        this.type = "SpriteAnimation";
        this.states = states;
        this.modulus = modulus;
>>>>>>> 9ae905d4c2263923ec430bb7dc3a642f21381508
    };

    return SpriteAnimation;
});
