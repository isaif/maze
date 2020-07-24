import Matter from 'matter-js';

const { Bodies } = Matter;

// boundaries to keep everything inside the frame
// x-cordinate, y-cordinate, width, height
// top, right, bottom and left
const boundaries = (width, height) => [
  Bodies.rectangle(width / 2, 0, width, 20, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 20, height, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 20, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 20, height, { isStatic: true }),
];

export default boundaries;
