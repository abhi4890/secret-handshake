import { secretHandshake } from './secret-handshake';

describe('Secret Handshake', () => {
  test('One should give a \'wink\'', () => {
    expect(secretHandshake(1)).toEqual(['wink']);
  });

  test('Two should give a \'double blink\'', () => {
    expect(secretHandshake(2)).toEqual(['double blink']);
  });

  test('Four gives \'close your eyes\'', () => {
    expect(secretHandshake(4)).toEqual(['close your eyes']);
  });

  test('Eight gives \'jump\'', () => {
    expect(secretHandshake(8)).toEqual(['jump']);
  });

  test('Eleven gives \'wink\'\' and \'double blink\'', () => {
    expect(secretHandshake(3)).toEqual(['wink', 'double blink']);
  });

  xtest('Nineteen gives \'double blink\' and \'wink\'', () => {
    expect(secretHandshake(19)).toEqual(['double blink', 'wink']);
  });

  xtest('Thirty one gives \'jump\', \'close your eyes\', \'double blink\', and \'wink\'', () => {
    expect(secretHandshake(31)).toEqual(['jump', 'close your eyes', 'double blink', 'wink']);
  });

  xtest('Invalid secret handshake gives error', () => {
    expect(() => secretHandshake('piggies'))
      .toThrow(new Error('Handshake must be a number'));
  });
});
