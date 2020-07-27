// Generate an array of walls
// false means there is a wall
export const generateWallPositions = (numberOfRows, numberOfColumns) => {
  const verticalWallPositions = Array(numberOfRows).fill(null)
    .map(() => Array(numberOfColumns - 1).fill(false));
  const horizontalWallPositions = Array(numberOfRows - 1).fill(null)
    .map(() => Array(numberOfColumns).fill(false));
  const re = { verticalWallPositions, horizontalWallPositions };
  // console.log(re);
  return re;
};

export const generateWalls = (verticalWallPositions, horizontalWallPositions, cellWidth, cellHeight, Bodies) => {
  const verticalWalls = [];
  const horizontalWalls = [];

  verticalWallPositions.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
      if (open) {
        return;
      }

      const xOrigin = cellWidth * columnIndex + cellWidth;
      const yOrigin = cellHeight * rowIndex + cellHeight / 2;
      verticalWalls.push(Bodies.rectangle(xOrigin, yOrigin, 5, cellHeight, { isStatic: true }));
    });
  });

  horizontalWallPositions.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
      if (open) {
        return;
      }

      const xOrigin = cellWidth * columnIndex + cellWidth / 2;
      const yOrigin = cellHeight * rowIndex + cellHeight;

      horizontalWalls.push(Bodies.rectangle(xOrigin, yOrigin, cellWidth, 5, { isStatic: true }));
    });
  });

  return [verticalWalls, horizontalWalls];
};

export const createWalls = (verticalWallPositions, horizontalWallPositions, cellWidth, cellHeight, Bodies, World, world) => {
  const [verticalWalls, horizontalWalls] = generateWalls(verticalWallPositions, horizontalWallPositions, cellWidth, cellHeight, Bodies);

  World.add(world, verticalWalls);
  World.add(world, horizontalWalls);
};
