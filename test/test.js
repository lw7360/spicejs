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

  it('should duplicate arrays with extended syntax', function() {
    var result = spice([1, 2, 3, 4, 5, 6], '::');
    expect(result).to.eql([1, 2, 3, 4, 5, 6]);
  });

  it('should duplicate strings with extended syntax', function() {
    var result = spice('123456', '::');
    expect(result).to.equal('123456');
  });

  it('should reverse strings with extended syntax', function() {
    var result = spice('123456', '::-1');
    expect(result).to.equal('654321');
  });

  it('should support left indexing with extended syntax and positive step', function() {
    var result = spice('123456', '1::2');
    expect(result).to.equal('246');
  });

  it('should support left indexing with extended syntax and negative step', function() {
    var result = spice('123456', '4::-2');
    expect(result).to.equal('531');
  });

  it('should support right indexing with extended syntax and positive step', function() {
    var result = spice('123456', ':4:2');
    expect(result).to.equal('13');
  });

  it('should support right indexing with extended syntax and negative step', function() {
    var result = spice('123456', ':0:-2');
    expect(result).to.equal('642');
  });

  it('should support 2 indices with extended syntax and positive step', function() {
    var result = spice('123456789', '-8:8:3');
    expect(result).to.equal('258');
  });

  it('should support 2 indices with extended syntax and negative step', function() {
    var result = spice('123456789', '8:-8:-3');
    expect(result).to.equal('963');
  });
});
