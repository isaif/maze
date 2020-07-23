import Matter from 'matter-js';

// module aliases
const {
  Engine, Render, World, Bodies, Runner,
} = Matter;

// Maze variables
const numberOfHorizontalCells = 3;
const numberOfVerticalCells = 3;

// frame variables
const width = window.innerWidth;
const height = window.innerHeight;

const columnUnitLength = width / numberOfVerticalCells;
const rowUnitLength = height / numberOfHorizontalCells;

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

// boundaries to keep everything inside the frame
// x-cordinate, y-cordinate, width, height
// top, right, bottom and left
const boundaries = [
  Bodies.rectangle(width / 2, 0, width, 20, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 20, height, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 20, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 20, height, { isStatic: true }),
];

World.add(engine.world, boundaries);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

// add runner
Runner.run(Runner.create(), engine);

const maze = Array(numberOfVerticalCells).fill(null)
  .map(() => Array(numberOfHorizontalCells).fill(false));

const verticalWalls = Array(numberOfVerticalCells).fill(null)
  .map(() => Array(numberOfHorizontalCells - 1).fill(false));

const horizontalWalls = Array(numberOfVerticalCells - 1).fill(null)
  .map(() => Array(numberOfHorizontalCells).fill(false));

// Choose a random cell to visit
const firstCellToVisit = {
  x: (Math.floor(Math.random() * numberOfVerticalCells)),
  y: (Math.floor(Math.random() * numberOfHorizontalCells)),
};

// Generate list of all neighbours of a given cell and shuffle it
const genNeighbourCells = (cell) => {
  // make a list of all neighbours
  const unshuffled = [
    { x: cell.x - 1, y: cell.y, direction: 'up' },
    { x: cell.x, y: cell.y + 1, direction: 'right' },
    { x: cell.x + 1, y: cell.y, direction: 'down' },
    { x: cell.x, y: cell.y - 1, direction: 'left' },
  ];

  // shuffle the list
  const shuffled = unshuffled
    .map((element) => ({ sort: Math.random(), value: element }))
    .sort((firstElemen, secondElement) => firstElemen.sort - secondElement.sort)
    .map((element) => element.value);

  return shuffled;
};

// console.log(maze);
// console.log(horizontalWalls);
// console.log(verticalWalls);
// console.log(firstCellToVisit);
// console.log(genNeighbourCells(firstCellToVisit));

// Go to the given cell and do other things
const visitCell = (cell) => {
  const { x, y } = cell;

  // Exit if cell is already visited
  if (maze[x][y]) {
    return;
  }

  // Else mark it as visited
  maze[x][y] = true;

  // Get all the neighbours of cell
  const neighbours = genNeighbourCells(cell);

  for (const neighbour of neighbours) {
    const { x: row, y: column, direction } = neighbour;

    // Check if it is not out of bounds and continue for rest
    if (
      row < 0
        || row >= numberOfVerticalCells
        || column < 0
        || column >= numberOfHorizontalCells
    ) {
      continue;
    }

    // Check if it was visited before
    if (maze[row][column]) {
      continue;
    }

    // Remove walls
    if (direction === 'up') {
      horizontalWalls[x - 1][y] = true;
    } else if (direction === 'right') {
      verticalWalls[x][y] = true;
    } else if (direction === 'down') {
      horizontalWalls[x][y] = true;
    } else if (direction === 'left') {
      verticalWalls[x][y - 1] = true;
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

    const xOrigin = columnUnitLength * columnIndex + columnUnitLength;
    const yOrigin = rowUnitLength * rowIndex + rowUnitLength / 2;

    const wall = Bodies.rectangle(xOrigin, yOrigin, 5, rowUnitLength, { isStatic: true });

    World.add(engine.world, wall);
  });
});

horizontalWalls.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const xOrigin = columnUnitLength * columnIndex + columnUnitLength / 2;
    const yOrigin = rowUnitLength * rowIndex + rowUnitLength;

    const wall = Bodies.rectangle(xOrigin, yOrigin, columnUnitLength, 5, { isStatic: true });

    World.add(engine.world, wall);
  });
});
