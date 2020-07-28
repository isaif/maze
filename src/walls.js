import Matter from 'matter-js';

const { Bodies, World } = Matter;

// Generate an array of walls
// false means there is a wall
export const generateWallPositions = (numberOfRows, numberOfColumns) => {
  const wallThickness = 5;

  const verticalWallPositions = Array(numberOfRows)
    .fill(null)
    .map(() => Array(numberOfColumns - 1).fill(false));
  const horizontalWallPositions = Array(numberOfRows - 1)
    .fill(null)
    .map(() => Array(numberOfColumns).fill(false));
  return { verticalWallPositions, horizontalWallPositions };
};

export const generateWalls = (
  verticalWallPositions,
  horizontalWallPositions,
  cellWidth,
  cellHeight
) => {
  const verticalWalls = [];
  const horizontalWalls = [];
  const wallThickness = 5;

  verticalWallPositions.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
      if (open) {
        return;
      }

      const xOrigin = cellWidth * columnIndex + cellWidth;
      const yOrigin = cellHeight * rowIndex + cellHeight / 2;
      verticalWalls.push(
        Bodies.rectangle(xOrigin, yOrigin, wallThickness, cellHeight, {
          isStatic: true
        })
      );
    });
  });

  horizontalWallPositions.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
      if (open) {
        return;
      }

      const xOrigin = cellWidth * columnIndex + cellWidth / 2;
      const yOrigin = cellHeight * rowIndex + cellHeight;

      horizontalWalls.push(
        Bodies.rectangle(xOrigin, yOrigin, cellWidth, wallThickness, {
          isStatic: true
        })
      );
    });
  });

  return [verticalWalls, horizontalWalls];
};

export const createWalls = (
  verticalWallPositions,
  horizontalWallPositions,
  cellWidth,
  cellHeight,
  world
) => {
  const [verticalWalls, horizontalWalls] = generateWalls(
    verticalWallPositions,
    horizontalWallPositions,
    cellWidth,
    cellHeight,
    Bodies
  );

  World.add(world, verticalWalls);
  World.add(world, horizontalWalls);
};
