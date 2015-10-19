import {
  es5,
  es6
} from '../../src/features/iterators-forof'

export default function() {
  it('should return result of fibonacci iterator in ES5', () => {
    es5().should.eql(15)
  })

  it.skip('should show class syntax in ES6', () => {
    es6().should.eql(15)
  })
}
