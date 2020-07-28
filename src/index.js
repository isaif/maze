import Matter from 'matter-js';
import createBoundaries from './boundaries';
import createMaze from './maze';

const width = window.innerWidth;
const height = window.innerHeight;

const { Engine, Render, Runner } = Matter;

// Maze variables
const numberOfRows = 5;
const numberOfColumns = 7;

// create an engine
const engine = Engine.create();

// get world from engine
const { world } = engine;

// create a renderer
const render = Render.create({
  element: document.body,
  engine,
  options: { width, height }
});

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

// add runner
Runner.run(Runner.create(), engine);

createBoundaries(width, height, world);

createMaze(numberOfRows, numberOfColumns, width, height, world);
