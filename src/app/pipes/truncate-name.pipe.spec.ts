import { TruncateNamePipe } from './truncate-name.pipe';

describe('TruncateNamePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateNamePipe();
    expect(pipe).toBeTruthy();
  });
});
