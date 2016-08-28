define(function () {
    var playerShip = function (game) {
        var entity = new Foundation.Entity("playerShip");

        entity.addComponent(new Foundation.Component.Size({w: 66, h: 50}));

        entity.addComponent(new Foundation.Component.Position({
            x: ((game.width / 2) - 33),
            y: (game.height - 95)
        }));

        entity.addComponent(new Foundation.Component.Sprite());

        entity.addComponent(new Foundation.Component.SpriteAnimation("idle", {
            idle: {
                frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 0, srcW: 99, srcH: 75})],
                speed: 1,
                loopFrames: true,
                currentFrame: 0
            },
            left: {
                frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 170, srcW: 90, srcH: 77})],
                speed: 1,
                loopFrames: true,
                currentFrame: 0
            },
            right: {
                frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 257, srcW: 90, srcH: 77})],
                speed: 1,
                loopFrames: true,
                currentFrame: 0
            }
        }));

        entity.addComponent(new Foundation.Component.MotionSensor());

        entity.addComponent(new Foundation.Component.Restraint({
            left: 0,
            right: game.width,
            top: 0,
            bottom: game.height
        }));

        return entity;
    };

    return playerShip;
});
