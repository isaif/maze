// Generate a random cell to visit
const randomCell = (numberOfRows, numberOfColumns) => ({
  row: Math.floor(Math.random() * numberOfRows),
  column: Math.floor(Math.random() * numberOfColumns)
});

export default randomCell;
