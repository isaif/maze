import Matter from 'matter-js';

const { Events } = Matter;

const checkWin = (engine) => {
  Events.on(engine, 'collisionStart', (event) => {
    const labels = ['ball', 'goal'];
    event.pairs.forEach((collision) => {
      if (
        labels.includes(collision.bodyA.label) &&
        labels.includes(collision.bodyB.label)
      ) {
        console.log('You won!!!');
      }
    });
  });
};

export default checkWin;
