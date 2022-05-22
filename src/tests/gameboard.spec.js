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
    expect(board.board[0][0] && board.board[0][1] && board.board[0][2]).toBe(ship);
    // expect(board.board[0]).toEqual(['s', 's', 's', 0, 0, 0, 0, 0, 0, 0]);
  });
});
