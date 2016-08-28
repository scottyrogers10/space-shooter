define(function () {
    var entityId = 0;

    var Entity = function (type) {
        this.type = type;
        this.id = entityId;
        this.components = {};

        entityId++;
    };

<<<<<<< HEAD
    Entity.prototype.addComponent = function (component) {
        this.components[component.type] = component;
=======
    function Add (entity) {
        this.entity = entity;
    };

    Add.prototype.component = function (component) {
        this.entity.components[component.type] = component;
>>>>>>> 9ae905d4c2263923ec430bb7dc3a642f21381508
    };

    return Entity
});
