import Matter from 'matter-js';
import createBoundaries from './boundaries';
import createMaze from './maze';
import createGoal from './goal';
import createBall from './ball';
import activateControls from './game-controls';

const width = window.innerWidth;
const height = window.innerHeight;

const { Engine, Render, Runner } = Matter;

// playbox is where game is displayed
const playbox = document.createElement('div');
document.body.appendChild(playbox);

playbox.height = height;
playbox.width = width;

const numberOfRows = 5;
const numberOfColumns = 7;

const boundaryThickness = 6;

// create an engine
const engine = Engine.create();

// get world from engine
const { world } = engine;

// create a renderer
const render = Render.create({
  element: playbox,
  engine,
  options: { width, height }
});

// run the engine
// Engine.run(engine);

// run the renderer
Render.run(render);

// add runner
Runner.run(Runner.create(), engine);

createBoundaries(width, height, boundaryThickness, world);

createMaze(numberOfRows, numberOfColumns, width, height, world);

createGoal(numberOfRows, numberOfColumns, width, height, world);

const ball = createBall(numberOfRows, numberOfColumns, width, height, world);

activateControls(ball);
