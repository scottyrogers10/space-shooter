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
        spaceShooter.add.view(bgCanvas);
        spaceShooter.add.view(fgCanvas);

        var spriteSheet = new Foundation.SpriteSheet("app/img/space-shooter-sprite-sheet.png");
        spaceShooter.add.spriteSheet(spriteSheet);

        var prepareGameObjects = function () {
            entities.init(spaceShooter);

            spaceShooter.add.system(new Foundation.System.MotionSensor(spaceShooter));
            spaceShooter.add.system(new PlayerShipController(spaceShooter));
            spaceShooter.add.system(new Foundation.System.Animation(spaceShooter));
            spaceShooter.add.system(new Foundation.System.Render(spaceShooter, "fg-canvas"));

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
