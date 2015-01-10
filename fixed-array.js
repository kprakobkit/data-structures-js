var FixedArray = function(size) {
  this.size = size;
  this.array = new Array(size);
};

FixedArray.prototype.set = function(index, element) {
  this.checkBound(index);
  this.array[index] = element;
};

FixedArray.prototype.get = function(index) {
  this.checkBound(index);
  return this.array[index];
};

FixedArray.prototype.checkBound = function(index) {
  if (index < 0 || index >= this.size) throw new RangeError();
};

module.exports = FixedArray;
