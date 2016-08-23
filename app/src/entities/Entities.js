define([
    "app/src/entities/EntityFactory.js"
], function (entityFactory) {
    var entities = {
        init: function (game) {
            entityFactory.init.playerShip(game);

            game.add.entity(entityFactory.create.playerShip(game));
        },
        update: function () {

        }
    };

    return entities
});
