import {
  es5,
  es6
} from '../../src/features/default-rest-spread'

export default function() {
  it('should show prototype syntax in ES5', () => {
    var o = es5()
    o.defaults().should.eql(12)
    o.defaults(5).should.eql(5)

    o.rest('x', 'y', 'z').should.eql('x,y,z')

    o.spread([1, 2, 3]).should.eql(6)
    o.spread([1, 2]).should.eql(3)
  })

  it.skip('should show class syntax in ES6', () => {
  })
}
