define(function () {
    var Restraint = function (game) {
        this.type = "restraint";
        this.game = game;
    };

    Restraint.prototype.checkRestraints = function (entity) {
        if (entity.components.position.x < entity.components.restraint.left) {
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
        }
    };

    Restraint.prototype.update = function () {
        var self = this;

        this.game.entities.forEach(function (entity) {
            if (entity.components.restraint && entity.components.position && entity.components.size) {
                self.checkRestraints(entity);
            }
        });
    };

    return Restraint;
});
