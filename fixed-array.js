var FixedArray = function(size) {
  this.size = size;
 this.array = new Array(size);
};


FixedArray.prototype.set = function(index, element) {
  if (index < 0 || index >= this.size) {
    throw new RangeError();
  } else {
    this.array[index] = element;
  }
};

FixedArray.prototype.get = function(index) {
  if (index < 0 || index >= this.size) {
    throw new RangeError();
  } else {
    return this.array[index];
  }
};

module.exports = FixedArray;
