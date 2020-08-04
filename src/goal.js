import Matter from 'matter-js';

const { Bodies, World } = Matter;

const createGoal = (numberOfRows, numberOfColumns, width, height, world) => {
  const cellWidth = width / numberOfColumns;
  const cellHeight = height / numberOfRows;

  const goal = Bodies.rectangle(
    width - cellWidth / 2,
    height - cellHeight / 2,
    cellWidth * 0.7,
    cellHeight * 0.7,
    {
      label: 'goal',
      isStatic: true
    }
  );

  World.add(world, goal);
};

export default createGoal;
