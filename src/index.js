import Matter from 'matter-js';

// module aliases
const {
  Engine, Render, World, Bodies, Runner, MouseConstraint,
} = Matter;

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
  element: document.body,
  engine,
  options: {
    width: 600,
    height: 600,
  },
});

// create two boxes and a ground
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const boxC = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

// add runner
// Runner.run(Runner.create(), engine);

// add mouse
// const mouse = Mouse.create(render.canvas);

// add mouse constraint
// const mouseConstraint = MouseConstraint.create(engine, mouse);
const mouseConstraint = MouseConstraint.create(engine);

World.add(engine.world, mouseConstraint);
