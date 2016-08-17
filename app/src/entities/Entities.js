define([
    "app/src/entities/EntityFactory.js"
], function (entityFactory) {
    var entities = {
        init: function (game) {
            game.add.entity(entityFactory.playerShip(game));
        },
        update: function () {
            
        }
    };

    return entities
});
