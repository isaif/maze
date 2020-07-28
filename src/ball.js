import Matter from 'matter-js';

const { Bodies, World } = Matter;

const createBall = (numberOfRows, numberOfColumns, width, height, world) => {
  const cellWidth = width / numberOfColumns;
  const cellHeight = height / numberOfRows;

  const ballRadius = (Math.min(cellHeight, cellWidth) * 0.6) / 2;

  const ball = Bodies.circle(cellWidth / 2, cellHeight / 2, ballRadius, {
    isStatic: true
  });

  World.add(world, ball);
};

export default createBall;
