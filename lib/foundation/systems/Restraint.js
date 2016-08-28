define(function () {
    var Restraint = function (game) {
        this.type = "restraint";
        this.game = game;
    };

    Restraint.prototype.checkRestraints = function (entity) {
        if (entity.components.position.x < entity.components.restraint.left) {
<<<<<<< HEAD
            entity.components.position.x = entity.components.restraint.left;
        }

        if (entity.components.position.x + entity.components.size.w > entity.components.restraint.right) {
            entity.components.position.x = entity.components.restraint.right - entity.components.size.w;
        }

        if (entity.components.position.y < entity.components.restraint.top) {
            entity.components.position.y = entity.components.restraint.top;
        }

        if (entity.components.position.y + entity.components.size.h > entity.components.restraint.bottom) {
            entity.components.position.y = entity.components.restraint.bottom - entity.components.size.h;
=======
            entity.components.position.x += entity.components.velocity.velX;
        }

        if (entity.components.position.x + entity.components.size.w > entity.components.restraint.right) {
            entity.components.position.x -= entity.components.velocity.velX;
        }

        if (entity.components.position.y < entity.components.restraint.top) {
            entity.components.position.y += entity.components.velocity.velY;
        }

        if (entity.components.position.y + entity.components.size.h > entity.components.restraint.bottom) {
            entity.components.position.y -= entity.components.velocity.velY;
>>>>>>> 9ae905d4c2263923ec430bb7dc3a642f21381508
        }
    };

    Restraint.prototype.update = function () {
        var self = this;

        this.game.entities.forEach(function (entity) {
<<<<<<< HEAD
            if (entity.components.restraint && entity.components.position && entity.components.size) {
=======
            if (entity.components.restraint && entity.components.position && entity.components.size && entity.components.velocity) {
>>>>>>> 9ae905d4c2263923ec430bb7dc3a642f21381508
                self.checkRestraints(entity);
            }
        });
    };

    return Restraint;
});
