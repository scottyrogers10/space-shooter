define(function () {
    var TYPE = "playerShip";

    var playerShip = {
        init: function (game) {
            game.systems.state.on(TYPE, {
                movingStraight: {
                    update: function (entity) {

                    }
                },
                movingLeft: {
                    update: function (entity) {

                    }
                },
                movingRight: {
                    update: function (entity) {

                    }
                }
            })
        },
        create: function (game) {
            var entity = new Foundation.Entity("playerShip");

            entity.add.component(new Foundation.Component.Size({w: 66, h: 50}));

            entity.add.component(new Foundation.Component.Position({
                x: ((game.width / 2) - 33),
                y: (game.height - 95)
            }));

            entity.add.component(new Foundation.Component.Sprite({
                img: game.spriteSheet,
                srcX: 0,
                srcY: 0,
                srcW: 99,
                srcH: 75
            }));

            entity.add.component(new Foundation.Component.SpriteAnimation({
                movingStraight: {
                    frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 0, srcW: 99, srcH: 75})],
                    currentFrame: 0
                },
                movingLeft: {
                    frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 170, srcW: 90, srcH: 77})],
                    currentFrame: 0
                },
                movingRight: {
                    frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 257, srcW: 90, srcH: 77})],
                    currentFrame: 0
                }
            }));

            entity.add.component(new Foundation.Component.MotionSensor());

            entity.add.component(new Foundation.Component.State("movingStraight"));

            return entity;
        }
    };

    return playerShip;
});
