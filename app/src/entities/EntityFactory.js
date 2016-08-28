define([
    "app/src/entities/PlayerShip.js"
], function (playerShip) {
    var entityFactory = {
        init: {
            playerShip: playerShip.init
        },
        create: {
            playerShip: playerShip.create
        }

    };

    return entityFactory;
});
