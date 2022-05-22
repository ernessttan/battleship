import Ship from './ship';

function Gameboard() {
  const initBoard = () => new Array(10).fill(0).map(() => new Array(10).fill(0));

  const board = initBoard();
  const placedShips = [];

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
    let shipPos = 0;
    // Place ship horizontally
    if (dir === 'h') {
      for (let i = 0; i < ship.length; i++) {
        placedShips.push(ship);
        board[hPos][vPos + i] = { ship, shipPos };
        shipPos++;
      }
    }

    if (dir === 'v') {
      for (let i = 0; i < ship.length; i++) {
        placedShips.push(ship);
        board[hPos + i][vPos] = { ship, shipPos };
        shipPos++;
      }
    }
  };

  const receiveAttack = (hPos, vPos) => {
    if (board[hPos][vPos].ship) {
      board[hPos][vPos].ship.hit(board[hPos][vPos].shipPos);
    } else {
      // Register a miss
    }
  };

  const allShipsSunk = () => placedShips.every((ship) => ship.isSunk() === true);

  return {
    initBoard, placeShip, receiveAttack, board, allShipsSunk,
  };
}

export default Gameboard;
