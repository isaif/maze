import genNeighbourCells from './neighbours';
import randomCell from './random-cell';
import { generateWallPositions, createWalls } from './walls';

const createMaze = (numberOfRows, numberOfColumns, width, height, world) => {
  const cellWidth = width / numberOfColumns;
  const cellHeight = height / numberOfRows;

  const firstCellToVisit = randomCell(numberOfRows, numberOfColumns);

  const maze = Array(numberOfRows)
    .fill(null)
    .map(() => Array(numberOfColumns).fill(false));

  const {
    verticalWallPositions,
    horizontalWallPositions
  } = generateWallPositions(numberOfRows, numberOfColumns);

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
        nextRow < 0 ||
        nextRow >= numberOfRows ||
        nextColumn < 0 ||
        nextColumn >= numberOfColumns
      ) {
        continue;
      }

      // Check if it was visited before
      if (maze[nextRow][nextColumn]) {
        continue;
      }

      // Remove walls
      if (direction === 'up') {
        horizontalWallPositions[row - 1][column] = true;
      } else if (direction === 'right') {
        verticalWallPositions[row][column] = true;
      } else if (direction === 'down') {
        horizontalWallPositions[row][column] = true;
      } else if (direction === 'left') {
        verticalWallPositions[row][column - 1] = true;
      }

      visitCell(neighbour);
    }
  };
  visitCell(firstCellToVisit);

  createWalls(
    verticalWallPositions,
    horizontalWallPositions,
    cellWidth,
    cellHeight,
    world
  );
};

export default createMaze;
