import Matter from "matter-js";

const { Bodies, World } = Matter;

// boundaries to keep everything inside the frame
// x-cordinate, y-cordinate, windowWidth, windowHeight
// top, right, bottom and left
const createBoundaries = (windowWidth, windowHeight, world) => {
  const boundaries = [
    Bodies.rectangle(windowWidth / 2, 0, windowWidth, 20, { isStatic: true }),
    Bodies.rectangle(windowWidth, windowHeight / 2, 20, windowHeight, {
      isStatic: true,
    }),
    Bodies.rectangle(windowWidth / 2, windowHeight, windowWidth, 20, {
      isStatic: true,
    }),
    Bodies.rectangle(0, windowHeight / 2, 20, windowHeight, { isStatic: true }),
  ];

  World.add(world, boundaries);
};

export default createBoundaries;
