define(function () {
    var entityId = 0;

    var Entity = function (type) {
        this.type = type;
        this.id = entityId;
        this.components = {};

        entityId++;
    };

    Entity.prototype.addComponent = function (component) {
        this.components[component.type] = component;
    };

    return Entity
});
