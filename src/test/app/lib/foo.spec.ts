import { expect }  from 'chai';
import foo from 'lib/foo';

describe('test lib foo', () => {

  it('should be return the same number', () => {
    expect(foo(1)).equal(1);
  });

});
