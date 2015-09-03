var expect = require('chai').expect;
var spice = require('../');

describe('#spice', function() {
  it('should duplicate arrays', function() {
    var result = spice([1, 2, 3], ':');
    expect(result).to.eql([1, 2, 3]);
  });

  it('should duplicate strings', function() {
    var result = spice('123', ':');
    expect(result).to.equal('123');
  });

  it('should support left indexing', function() {
    var result = spice([1, 2, 3], '2:');
    expect(result).to.eql([3]);
  });

  it('should support right indexing', function() {
    var result = spice([1, 2, 3], ':2');
    expect(result).to.eql([1, 2]);
  });

  it('should support 2 indices', function() {
    var result = spice([1, 2, 3], '1:2');
    expect(result).to.eql([2]);
  });
});
