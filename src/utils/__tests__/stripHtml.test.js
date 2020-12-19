import { stripHtml } from '../stripHtml';

describe('stripHtml tests', () => {
  it('should handle stripHtml', () => {
    const res = stripHtml('<p>Test text</p>');
    expect(res).toEqual('Test text');
  });
});
