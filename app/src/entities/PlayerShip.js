define(function () {
    var playerShip = function (game) {
        var entity = new Foundation.Entity("playerShip");

        entity.add.component("size", new Foundation.Component.Size({w: 66, h: 50}));

        entity.add.component("position", new Foundation.Component.Position({
            x: ((game.width / 2) - 33),
            y: (game.height - 95)
        }));

        entity.add.component("sprite", new Foundation.Component.Sprite({
            img: game.spriteSheet,
            srcX: 0,
            srcY: 0,
            srcW: 99,
            srcH: 75
        }));

        entity.add.component("spriteAnimation", new Foundation.Component.SpriteAnimation({
            idle: {
                frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 0, srcW: 99, srcH: 75})],
                currentFrame: 0
            },
            left: {
                frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 170, srcW: 90, srcH: 77})],
                currentFrame: 0
            },
            right: {
                frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 257, srcW: 90, srcH: 77})],
                currentFrame: 0
            }
        }));

        entity.add.component("motionSensor", new Foundation.Component.MotionSensor());

        entity.add.component("state", new Foundation.Component.State("idle"));

        return entity;
    };

    return playerShip;
});
