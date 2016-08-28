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
            spaceShooter.addSystem(new Foundation.System.MotionSensor(spaceShooter));
            spaceShooter.addSystem(new PlayerShipController(spaceShooter));
            spaceShooter.addSystem(new Foundation.System.Restraint(spaceShooter));
            spaceShooter.addSystem(new Foundation.System.SpriteAnimation(spaceShooter));
            spaceShooter.addSystem(new Foundation.System.Render(spaceShooter, "fg-canvas"));

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
