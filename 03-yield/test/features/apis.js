import {
  es5,
  es6
} from '../../src/features/apis'

export default function() {
  it('should return true for includes() in ES5', () => {
    es5().should.eql(true)
  })

  it.skip('should show class syntax in ES6', () => {
  })
}
