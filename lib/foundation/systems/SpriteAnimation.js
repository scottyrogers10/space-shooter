define(function () {
    var SpriteAnimation = function (game) {
        this.type = "spriteAnimation";
        this.game = game;
    };

    SpriteAnimation.prototype.animate = function (entity) {
        var spriteAnimation = entity.components.spriteAnimation;
        var currentState = spriteAnimation.currentState;

        entity.components.sprite = spriteAnimation.animationStates[currentState].frames[spriteAnimation.animationStates[currentState].currentFrame];
        spriteAnimation.animationStates[currentState].currentFrame++;

        if (spriteAnimation.animationStates[currentState].currentFrame > spriteAnimation.animationStates[currentState].frames.length - 1) {
            if (spriteAnimation.animationStates[currentState].loopFrames) {
                spriteAnimation.animationStates[currentState].currentFrame = 0;
            }
        }

    };

    SpriteAnimation.prototype.update = function () {
        var self = this;

        for (var i = 0; i < self.game.entities.length; i++) {
            if (self.game.entities[i].components.spriteAnimation && self.game.entities[i].components.sprite) {
                self.animate(self.game.entities[i]);
            }
        }
    };

    return SpriteAnimation;
});
