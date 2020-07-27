// Generate list of all neighbours of a given cell and shuffle it
const genNeighbourCells = (cell) => {
  const { row, column } = cell;

  // make a list of all neighbours
  const unshuffled = [
    { row: row - 1, column, direction: "up" },
    { row, column: column + 1, direction: "right" },
    { row: row + 1, column, direction: "down" },
    { row, column: column - 1, direction: "left" },
  ];

  // shuffle the list
  const shuffled = unshuffled
    .map((element) => ({ sort: Math.random(), value: element }))
    .sort((firstElemen, secondElement) => firstElemen.sort - secondElement.sort)
    .map((element) => element.value);

  return shuffled;
};

export default genNeighbourCells;
