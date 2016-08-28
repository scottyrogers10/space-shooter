define([
    "lib/foundation/components/MotionSensor.js",
    "lib/foundation/components/Position.js",
    "lib/foundation/components/Size.js",
    "lib/foundation/components/Sprite.js",
    "lib/foundation/components/State.js",
    "lib/foundation/components/Velocity.js",
    "lib/foundation/components/DPad.js",
    "lib/foundation/components/Collidable.js",
<<<<<<< HEAD
    "lib/foundation/components/Restraint.js"
], function (MotionSensor, Position, Size, Sprite, SpriteAnimation, State, Velocity, DPad, Collidable, Restraint) {
=======
    "lib/foundation/components/Restraint.js",
    "lib/foundation/components/SpriteAnimation.js"
], function (MotionSensor, Position, Size, Sprite, State, Velocity, DPad, Collidable, Restraint, SpriteAnimation) {
>>>>>>> 9ae905d4c2263923ec430bb7dc3a642f21381508

     return {
         Size: Size,
         Position: Position,
         Sprite: Sprite,
         MotionSensor: MotionSensor,
         State: State,
         Velocity: Velocity,
         DPad: DPad,
         Collidable: Collidable,
<<<<<<< HEAD
         Restraint: Restraint
=======
         Restraint: Restraint,
         SpriteAnimation: SpriteAnimation
>>>>>>> 9ae905d4c2263923ec430bb7dc3a642f21381508
     };
});
