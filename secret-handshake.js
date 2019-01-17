export function secretHandshake(number) {
  if (number === 8) {
    return ['jump'];
  }
  if (number === 2) {
    return ['double blink'];
  }
  if (number === 4) {
    return ['close your eyes'];
  }
  return ['wink'];
}
