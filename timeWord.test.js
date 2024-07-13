const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('it returns "midnight" for "00:00"', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('00:12 should return twelve twelve am', () => {
    expect(timeWord('00:12')).toBe('twelve twelve am');
  });

  test('12:00 should return noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  });

  test('it should return twelve oh nine pm for 12:09', () => {
    expect(timeWord('12:09')).toBe('twelve oh nine pm');
  });

  test('it should return elven twenty three pm for 23:23', () => {
    expect(timeWord('23:23')).toBe('eleven twenty three pm');
  });

  test('it should return twelve thirty am for 00:30', () => {
    expect(timeWord('00:30')).toBe('twelve thirty am');
  });
});
