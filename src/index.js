import Matter from 'matter-js';

// module aliases
const {
  Engine, Render, World, Bodies, Runner,
} = Matter;

// frame variables
const width = 600;
const height = 600;

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
  element: document.body,
  engine,
  options: {
    width,
    height,
  },
});

// Walls to keep everything inside the frame
// x-cordinate, y-cordinate, width, height
// top, right, bottom and left
const walls = [
  Bodies.rectangle(width / 2, 0, width, 20, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 20, height, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 20, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 20, height, { isStatic: true }),
];

World.add(engine.world, walls);

// create two boxes and a ground
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const boxC = Bodies.rectangle(450, 50, 80, 80);

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

// add runner
// Runner.run(Runner.create(), engine);
