var circle = require('../lib/sample.circle');
var expect = require('chai').expect;

describe('circle', function() {

  describe('#area(radius)', function () {
    it('should return 314. when radius is 10', function () {
      expect(circle.area(10)).to.equal(Math.PI * 10 * 10);
    });
  });

  describe('#area(radius)', function () {
    it('should throw error when radius is undefined', function () {
      expect(function() {
        circle.area();
      }).to.throw(TypeError, 'invalid radius : undefined');
    });
  });

  describe('#area(radius)', function () {
    it('should throw error when radius is less equals to 0', function () {
      expect(function() {
        circle.area(0);
      }).to.throw(TypeError, 'invalid radius : 0');
    });
  });

  // @see http://efcl.info/2014/0314/res3708/
  describe('#areaAsync(radius)', function () {
    it('should resolve with result 314. when radius is 10', function () {
      return circle.areaAsync(10).then(function(result) {
        expect(result).to.equal(Math.PI * 10 * 10);
      }).catch(function(err) {
        // なくてもよいが念のため
        expect.fail();
      });
    });
  });

  describe('#areaAsync(radius)', function () {
    it('should reject with TypeError when radius is less equals to 0', function () {
      return circle.areaAsync(0).then(function(result) {
        expect.fail();
      }).catch(function(err) {
        expect(err.name).to.equal('TypeError');
        expect(err.message).to.equal('invalid radius : 0');
      });
    });
  });

});
