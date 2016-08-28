require([
    "app/src/entities/Entities.js",
    "app/src/systems/PlayerShipController.js"
], function (entities, PlayerShipController) {
    var spaceShooter = null;

    var init = function () {
        spaceShooter = new Foundation.Game({
            type: "2d",
            width: "full-screen",
            height: "full-screen"
        });

        var bgCanvas = new Foundation.View(spaceShooter, "bg-canvas");
        var fgCanvas = new Foundation.View(spaceShooter, "fg-canvas");
        spaceShooter.addView(bgCanvas);
        spaceShooter.addView(fgCanvas);

        var spriteSheet = new Foundation.SpriteSheet("app/img/space-shooter-sprite-sheet.png");
        spaceShooter.addSpriteSheet(spriteSheet);

        var prepareGameObjects = function () {
<<<<<<< HEAD
            spaceShooter.addSystem(new Foundation.System.MotionSensor(spaceShooter));
            spaceShooter.addSystem(new PlayerShipController(spaceShooter));
            spaceShooter.addSystem(new Foundation.System.Restraint(spaceShooter));
            spaceShooter.addSystem(new Foundation.System.SpriteAnimation(spaceShooter));
            spaceShooter.addSystem(new Foundation.System.Render(spaceShooter, "fg-canvas"));

            entities.init(spaceShooter);
=======
            spaceShooter.add.system(new Foundation.System.MotionSensor(spaceShooter));
            spaceShooter.add.system(new PlayerShipController(spaceShooter));
            spaceShooter.add.system(new Foundation.System.SpriteAnimation(spaceShooter));
            spaceShooter.add.system(new Foundation.System.State(spaceShooter));
            spaceShooter.add.system(new Foundation.System.Render(spaceShooter, "fg-canvas"));
>>>>>>> 9ae905d4c2263923ec430bb7dc3a642f21381508

            entities.init(spaceShooter);

            run();
        };

        spaceShooter.spriteSheet.addEventListener("load", function () {
            prepareGameObjects();
        });
    };

    function run () {
        spaceShooter.runGameLoop();
    };

    init();

    window.spaceShooter = spaceShooter;
});
