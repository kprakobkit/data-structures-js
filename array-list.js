var FixedArray = require('./fixed-array.js');

var ArrayList = function(size) {
  this.array = new FixedArray(size);
  this.size = this.array.size;
};

ArrayList.prototype.add = function(element) {
  var lastIndex = this.size;
  this.doubleSize();
  this.array.set(lastIndex, element);
  return element;
};

ArrayList.prototype.get = function(index) {
  return this.array.get(index);
};

ArrayList.prototype.doubleSize = function() {
  var oldList = this.array;
  this.array = new FixedArray(this.size * 2);
  oldList.array.forEach(function(element, index) {
    this.array.set(index, element);
  });
};

module.exports = ArrayList;
