import Matter from 'matter-js';

const { Bodies, World } = Matter;

// boundaries to keep everything inside the frame
// x-cordinate, y-cordinate, windowWidth, windowHeight
// top, right, bottom and left
const createBoundaries = (
  windowWidth,
  windowHeight,
  boundaryThickness,
  world
) => {
  const boundaries = [
    Bodies.rectangle(windowWidth / 2, 0, windowWidth, boundaryThickness, {
      isStatic: true
    }),
    Bodies.rectangle(
      windowWidth,
      windowHeight / 2,
      boundaryThickness,
      windowHeight,
      {
        isStatic: true
      }
    ),
    Bodies.rectangle(
      windowWidth / 2,
      windowHeight,
      windowWidth,
      boundaryThickness,
      {
        isStatic: true
      }
    ),
    Bodies.rectangle(0, windowHeight / 2, boundaryThickness, windowHeight, {
      isStatic: true
    })
  ];

  World.add(world, boundaries);
};

export default createBoundaries;
