import Matter from 'matter-js';

const { Body } = Matter;

const activateControls = (ball) => {
  const { x, y } = ball.velocity;

  document.addEventListener('keydown', (event) => {
    // Left
    if (event.key === 'ArrowLeft') {
      Body.setVelocity(ball, { x: x - 5, y });
    }
    // Up
    if (event.key === 'ArrowUp') {
      Body.setVelocity(ball, { x, y: y - 5 });
    }
    // Right
    if (event.key === 'ArrowRight') {
      Body.setVelocity(ball, { x: x + 5, y });
    }
    // Down
    if (event.key === 'ArrowDown') {
      Body.setVelocity(ball, { x, y: y + 5 });
    }
  });
};

export default activateControls;
