// Generate a random cell to visit
const randomCell = (numberOfCellsInRow, numberOfCellsInColumn) => ({
  row: (Math.floor(Math.random() * numberOfCellsInColumn)),
  column: (Math.floor(Math.random() * numberOfCellsInRow)),
});

export default randomCell;
