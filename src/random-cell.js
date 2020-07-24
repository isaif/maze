// Generate a random cell to visit
const randomCell = (numberOfCellsInRow, numberOfCellsInColumn) => ({
  row: (Math.floor(Math.random() * numberOfCellsInRow)),
  column: (Math.floor(Math.random() * numberOfCellsInColumn)),
});

export default randomCell;
