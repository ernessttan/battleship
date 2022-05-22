import Ship from '../components/ship';

describe('Ship', () => {
  let ship;
  beforeEach(() => {
    ship = Ship(3);
  });

  it('creates and initializes a ship', () => {
    expect(ship.ship).toEqual([0, 0, 0]);
  });

  it('should not be sunk', () => {
    ship.hit(0);
    expect(ship.isSunk()).toEqual(false);
  });

  it('can be sunk', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toEqual(true);
  });
});
