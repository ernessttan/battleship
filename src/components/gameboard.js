import Ship from './ship';

function Gameboard() {
  const initBoard = () => new Array(10).fill(0).map(() => new Array(10).fill(0));

  const board = initBoard();

  const placeShip = (hPos, vPos, ship, dir) => {
    /*

    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    board[0][0 + i] = 's'

    */
    // Place ship horizontally
    if (dir === 'h') {
      for (let i = 0; i < ship.length; i++) {
        board[hPos][vPos + i] = ship;
      }
    }
  };

  return { initBoard, placeShip, board };
}

export default Gameboard;
