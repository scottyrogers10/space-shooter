define([
    "lib/foundation/systems/Render.js",
    "lib/foundation/systems/MotionSensor.js",
    "lib/foundation/systems/DPad.js",
    "lib/foundation/systems/Collision.js",
    "lib/foundation/systems/Restraint.js",
    "lib/foundation/systems/State.js",
    "lib/foundation/systems/SpriteAnimation.js"
], function (Render, MotionSensor, DPad, Collision, Restraint, State, SpriteAnimation) {

    return {
        Render: Render,
        MotionSensor: MotionSensor,
        DPad: DPad,
        Collision: Collision,
        Restraint: Restraint,
        State: State,
        SpriteAnimation: SpriteAnimation
    }
});
