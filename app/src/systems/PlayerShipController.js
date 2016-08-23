define(function () {
    var PlayerShipController = function (game) {
        this.game = game;
        this.playerShip = {};
    };

    PlayerShipController.prototype.setState = function () {
        var self = this;

        if (self.playerShip.components.motionSensor.gamma > -4 && self.playerShip.components.motionSensor.gamma < 4) {
            self.playerShip.components.state.name = "movingStraight";
        } else {
            if (self.playerShip.components.motionSensor.gamma < 0) {
                self.playerShip.components.state.name = "movingLeft";
            }

            if (self.playerShip.components.motionSensor.gamma > 0) {
                self.playerShip.components.state.name = "movingRight";
            }
        }
    };

    PlayerShipController.prototype.setMovement = function () {
        var self = this;

        self.playerShip.components.position.x += (self.playerShip.components.motionSensor.gamma / 3) || 0;

        if (self.playerShip.components.motionSensor.beta > 40) {
            self.playerShip.components.position.y += (self.playerShip.components.motionSensor.beta - 40) / 3;
        }

        if (self.playerShip.components.motionSensor.beta < 40) {
            self.playerShip.components.position.y -= Math.abs((self.playerShip.components.motionSensor.beta - 40) / 3);
        }
    };

    PlayerShipController.prototype.init = function () {
        var self = this;

        for (var i = 0; i < this.game.entities.length; i++) {
            if (this.game.entities[i].type == "playerShip") {
                self.playerShip = this.game.entities[i];
                break;
            }
        }
    };

    PlayerShipController.prototype.update = function () {
        this.setState();
        this.setMovement();
    };

    return PlayerShipController;
});
