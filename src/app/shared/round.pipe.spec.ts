import { RoundPipe } from './round.pipe';

describe('RoundPipe', () => {
  let pipe = new RoundPipe();
 
  it('transforms 72.35 to 72', () => {
    expect(pipe.transform(72.35)).toBe(72);
  });
 
  it('transforms 78.6 to 79', () => {
    expect(pipe.transform(78.6)).toBe(79);
  });
 
});