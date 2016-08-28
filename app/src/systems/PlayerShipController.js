define(function () {
    var PlayerShipController = function (game) {
        this.game = game;
        this.playerShip = {};
    };

    PlayerShipController.prototype.movement = function () {
        var self = this;

       self.playerShip.components.position.x += (self.playerShip.components.motionSensor.gamma / 3);

       if (self.playerShip.components.motionSensor.beta > 40) {
           self.playerShip.components.position.y += (self.playerShip.components.motionSensor.beta - 40) / 3;
       }

       if (self.playerShip.components.motionSensor.beta < 40) {
           self.playerShip.components.position.y -= Math.abs((self.playerShip.components.motionSensor.beta - 40) / 3);
       }
    };

    PlayerShipController.prototype.setAnimationState = function () {
        var self = this;

        if (self.playerShip.components.motionSensor.gamma > -4 && self.playerShip.components.motionSensor.gamma < 4) {
            self.playerShip.components.spriteAnimation.currentState = "idle";
        } else {
            if (self.playerShip.components.motionSensor.gamma < 0) {
                self.playerShip.components.spriteAnimation.currentState = "left";
            }

            if (self.playerShip.components.motionSensor.gamma > 0) {
                self.playerShip.components.spriteAnimation.currentState = "right";
            }
        }
    };

    PlayerShipController.prototype.init = function () {
        var self = this;

        for (var i = 0; i < self.game.entities.length; i++) {
            if (self.game.entities[i].type == "playerShip") {
                self.playerShip = self.game.entities[i];
                break;
            }
        }
    };

    PlayerShipController.prototype.update = function () {
        var playerShip = this.playerShip;

        if (playerShip.components.motionSensor && playerShip.components.position && playerShip.components.spriteAnimation) {
            this.movement();
            this.setAnimationState();
        }
    };

    return PlayerShipController;
});
