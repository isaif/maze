import Matter from 'matter-js';
import boundaries from './boundaries';
import { createMaze } from './maze';

const width = window.innerWidth;
const height = window.innerHeight;

// module aliases
const {
  Engine, Render, World, Bodies, Runner,
} = Matter;

// Maze variables
const numberOfRows = 5;
const numberOfColumns = 7;

// frame variables

// create an engine
const engine = Engine.create();

// create world
const { world } = engine;

// create a renderer
const render = Render.create({
  element: document.body,
  engine,
  options: {
    width,
    height,
  },
});

World.add(world, boundaries(width, height));

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

// add runner
Runner.run(Runner.create(), engine);

// console.log(maze);
// console.log(horizontalWalls);
// console.log(verticalWalls);

createMaze(numberOfRows, numberOfColumns, width, height, Bodies, World, world);
