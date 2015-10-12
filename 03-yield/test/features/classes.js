import {
  es5,
  es6
} from '../../src/features/classes'

export default function() {
  it('should say Hello, World! in ES5', () => {
    es5('World!').should.eql('World!')
  })

  it.skip('should show class syntax in ES6', () => {
  })
}
