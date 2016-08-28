define([
    "app/src/entities/EntityFactory.js"
], function (entityFactory) {
    var entities = {
        init: function (game) {
<<<<<<< HEAD
            game.addEntity(entityFactory.playerShip(game));
=======
            entityFactory.init.playerShip(game);

            game.add.entity(entityFactory.create.playerShip(game));
>>>>>>> 9ae905d4c2263923ec430bb7dc3a642f21381508
        },
        update: function () {

        }
    };

    return entities
});
