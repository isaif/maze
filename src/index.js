import Matter from 'matter-js';
import genNeighbourCells from './neighbours';
import boundaries from './boundaries';
import randomCell from './random-cell';

// module aliases
const {
  Engine, Render, World, Bodies, Runner,
} = Matter;

// Maze variables
const numberOfRows = 5;
const numberOfColumns = 7;

// frame variables
const width = window.innerWidth;
const height = window.innerHeight;

const unitlengthX = width / numberOfColumns;
const unitlengthY = height / numberOfRows;

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

const maze = Array(numberOfRows).fill(null)
  .map(() => Array(numberOfColumns).fill(false));

const verticalWalls = Array(numberOfRows).fill(null)
  .map(() => Array(numberOfColumns - 1).fill(false));

const horizontalWalls = Array(numberOfRows - 1).fill(null)
  .map(() => Array(numberOfColumns).fill(false));

// Choose a random cell to visit
const firstCellToVisit = randomCell(numberOfColumns, numberOfRows);

// console.log(maze);
// console.log(horizontalWalls);
// console.log(verticalWalls);
// console.log(firstCellToVisit);
// console.log(genNeighbourCells(firstCellToVisit));

// Go to the given cell and do other things
const visitCell = (cell) => {
  const { row, column } = cell;

  // Exit if cell is already visited
  if (maze[row][column]) {
    return;
  }

  // Else mark it as visited
  maze[row][column] = true;

  // Get all the neighbours of cell
  const neighbours = genNeighbourCells(cell);

  for (const neighbour of neighbours) {
    const { row: nextRow, column: nextColumn, direction } = neighbour;

    // Check if it is not out of bounds and continue for rest
    if (
      nextRow < 0
        || nextRow >= numberOfRows
        || nextColumn < 0
        || nextColumn >= numberOfColumns
    ) {
      continue;
    }

    // Check if it was visited before
    if (maze[nextRow][nextColumn]) {
      continue;
    }

    // Remove walls
    if (direction === 'up') {
      horizontalWalls[row - 1][column] = true;
    } else if (direction === 'right') {
      verticalWalls[row][column] = true;
    } else if (direction === 'down') {
      horizontalWalls[row][column] = true;
    } else if (direction === 'left') {
      verticalWalls[row][column - 1] = true;
    }

    visitCell(neighbour);
  }
};

visitCell(firstCellToVisit);

console.log(maze);
console.log(horizontalWalls);
console.log(verticalWalls);

verticalWalls.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const xOrigin = unitlengthX * columnIndex + unitlengthX;
    const yOrigin = unitlengthY * rowIndex + unitlengthY / 2;

    const wall = Bodies.rectangle(xOrigin, yOrigin, 5, unitlengthY, { isStatic: true });

    World.add(world, wall);
  });
});

horizontalWalls.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const xOrigin = unitlengthX * columnIndex + unitlengthX / 2;
    const yOrigin = unitlengthY * rowIndex + unitlengthY;

    const wall = Bodies.rectangle(xOrigin, yOrigin, unitlengthX, 5, { isStatic: true });

    World.add(world, wall);
  });
});
