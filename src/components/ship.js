// Ship is an Array
function Ship(length) {
  const ship = new Array(length).fill(0);
  // Takes a number and marks position as hit
  const hit = (position) => {
    if (ship[position] === 0) {
      ship[position] = 1;
    }
  };
  // Calculates based on length whether all positions are hit
  const isSunk = () => {
    const result = ship.every((position) => position === 1);
    return result;
  };
  return {
    ship, length, hit, isSunk,
  };
}

export default Ship;
