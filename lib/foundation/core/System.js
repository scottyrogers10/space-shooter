define([
    "lib/foundation/systems/Render.js",
    "lib/foundation/systems/MotionSensor.js",
    "lib/foundation/systems/Animation.js"
], function (Render, MotionSensor, Animation) {

    return {
        Render: Render,
        MotionSensor: MotionSensor,
        Animation: Animation
    }
});
