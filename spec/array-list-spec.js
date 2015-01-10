var ArrayList = require('../array-list.js');

describe("Array List", function() {
  var size = 5;
  var arrayList = new ArrayList(size);

  describe("new", function() {
    it("should create an array list object with the specified size", function() {
      expect(arrayList.size).toEqual(size);
    });
  });

  describe("add", function() {
    var returnedElement = arrayList.add('element');

    it("should add an element at the end of the list", function() {
      expect(returnedElement).toEqual('element');
      expect(arrayList.get(size)).toEqual('element');
    });
  });
});
