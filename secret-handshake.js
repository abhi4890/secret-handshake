export function secretHandshake(number) {
  if (typeof number !== 'number') {
    throw new Error('Handshake must be a number');
  } else {
    const commands = ['wink', 'double blink', 'close your eyes', 'jump'];
    const numberAsBinaryString = Number(number)
      .toString(2);
    const digitArray = numberAsBinaryString
      .split('')
      .reverse()
      .map(element => Number(element));
    let sequence = [];
    let iterator;
    for (iterator = 0; iterator < digitArray.length; iterator += 1) {
      if (digitArray[iterator] === 1) {
        sequence.push(commands[iterator]);
      }
    }
    if (digitArray.length >= 5) {
      sequence.pop();
      sequence = sequence.reverse();
    }
    return sequence;
  }
}
