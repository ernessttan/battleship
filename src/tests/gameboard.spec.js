import Gameboard from '../components/gameboard';
import Ship from '../components/ship';

describe('Gameboard', () => {
  let board;
  let ship;

  beforeEach(() => {
    board = Gameboard();
    ship = Ship(3);
  });

  it('initializes a 10x10 board', () => {
    expect(board.initBoard().length).toEqual(10);
    expect(board.initBoard()[0].length).toEqual(10);
  });

  it('places a ship of length 3 horizontally on the board', () => {
    board.placeShip(0, 0, ship, 'h');
    expect(board.board[0][0]).toStrictEqual({ ship, shipPos: 0 });
    expect(board.board[0][1]).toStrictEqual({ ship, shipPos: 1 });
    expect(board.board[0][2]).toStrictEqual({ ship, shipPos: 2 });
    // expect(board.board[0]).toEqual(['s', 's', 's', 0, 0, 0, 0, 0, 0, 0]);
  });

  it('plaeces a ship of length 3 vertically on the board', () => {
    board.placeShip(0, 0, ship, 'v');
    expect(board.board[0][0]).toStrictEqual({ ship, shipPos: 0 });
    expect(board.board[1][0]).toStrictEqual({ ship, shipPos: 1 });
    expect(board.board[2][0]).toStrictEqual({ ship, shipPos: 2 });
  });

  it('allows a ship to receive an attack', () => {
    board.placeShip(0, 0, ship, 'h');
    board.receiveAttack(0, 0, ship);
    expect(ship.ship[0]).toEqual(1);
  });

  it('sinks a ship after receiving attacks', () => {
    board.placeShip(0, 0, ship, 'h');
    board.receiveAttack(0, 0, ship);
    board.receiveAttack(0, 1, ship);
    board.receiveAttack(0, 2, ship);
    console.log(board.board);
    expect(ship.isSunk()).toEqual(true);
  });

  it('verifies that all ships are sunk', () => {
    board.placeShip(0, 0, ship, 'h');
    board.receiveAttack(0, 0, ship);
    board.receiveAttack(0, 1, ship);
    board.receiveAttack(0, 2, ship);
    expect(board.allShipsSunk()).toEqual(true);
  });
});
