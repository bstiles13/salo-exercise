import { stripDomain } from '../stripDomain';

describe('stripDomain tests', () => {
  it('should handle stripDomain', () => {
    const res = stripDomain('test@domain.com');
    expect(res).toEqual('test');
  });
});
