var FixedArray = require ('../fixed-array.js');

describe("Fixed Array", function() {
  var size = 5;
  var fixedArray = new FixedArray(size);
  fixedArray.set(0, 'element');

  describe("new", function() {
    it("should initiate with the specified size", function() {
      expect(fixedArray.size).toEqual(size);
    });
  });

  describe("set", function() {
    it("should raise an error if the given index is greater than the size of the array", function() {
      expect(function() {
        fixedArray.set(5, 'element2');
      }).toThrow(new RangeError());
    });
  });

  describe("get", function() {
    var element = fixedArray.get(0);

    it("should set with the specified size and increase size by 1", function() {
      expect(element).toEqual('element');
    });

    it("should raise an error if the given index is greater than the size of the array", function() {
      expect(function() {
        fixedArray.get(10);
      }).toThrow(new RangeError());
    });
  });
});
