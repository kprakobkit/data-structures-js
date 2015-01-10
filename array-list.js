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
  var newSize = this.size * 2;
  this.size = newSize;
  var newArray = new FixedArray(newSize);

  oldList.array.forEach(function(element, index) {
    newArray.set(index, element);
  });

  this.array = newArray;
};

ArrayList.prototype.set = function(index, element) {
    while(index > this.size - 1) this.doubleSize();
    this.array.set(index, element);
    return element;
};

ArrayList.prototype.insert = function(index, element) {
  var oldElement = this.get(index);
  this.set(index, element);

  if (index == this.size - 1) {
    this.add(oldElement);
  } else {
    this.insert(index+1,oldElement);
  }
};

module.exports = ArrayList;
