define([
    "app/src/entities/EntityFactory.js"
], function (entityFactory) {
    var entities = {
        init: function (game) {
            game.addEntity(entityFactory.playerShip(game));
        },
        update: function () {
            
        }
    };

    return entities
});
