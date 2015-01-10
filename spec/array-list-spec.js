var ArrayList = require('../array-list.js');

describe("Array List", function() {
  describe("new", function() {
    var size = 5;
    var arrayList = new ArrayList(size);

    it("should create an array list object with the specified size", function() {
      expect(arrayList.size).toEqual(size);
    });
  });

  describe("add", function() {
    var size = 5;
    var arrayList = new ArrayList(size);
    var returnedElement = arrayList.add('element');

    it("should add an element at the end of the list", function() {
      expect(returnedElement).toEqual('element');
      expect(arrayList.get(size)).toEqual('element');
    });
  });

  describe("get", function() {
    var size = 5;
    var arrayList = new ArrayList(size);
    var returnedElement = arrayList.add('element');

    it("should return the element at the specified index", function() {
      expect(arrayList.get(size)).toEqual('element');
    });
  });

  describe("set", function() {
    var size = 5;
    var arrayList = new ArrayList(size);
    var element = 'element';
    var newElement = 'new element';
    var index = 4;
    var returnedElement = arrayList.set(index, element);

    it("should return the element", function() {
      expect(returnedElement).toEqual(element);
    });

    it("should set the element at the specified index", function() {
      expect(arrayList.get(index)).toEqual(element);
    });

    it("should replace the element at the specified index", function() {
      arrayList.set(index, newElement);
      expect(arrayList.get(index)).toEqual(newElement);
    });

    it("should not throw an error for a very large index ", function() {
      var largeIndex = 100;
      var largeElement = 1000;

      arrayList.set(largeIndex, largeElement);
      expect(arrayList.get(largeIndex)).toEqual(largeElement);
    });
  });

  describe("insert", function() {
    var size = 5;
    var arrayList = new ArrayList(size);
    var elements = ['first', 'second', 'third', 'fourth', 'fifth'];
    var insertedElement = 'insert';
    var middleIndex = 2;
    elements.forEach(function(element, index) {
      arrayList.set(index, element);
    });

    it("should insert an element at the middle of the list", function() {
      arrayList.insert(middleIndex, insertedElement);
      expect(arrayList.get(middleIndex)).toEqual(insertedElement);
      expect(arrayList.get(middleIndex+1)).toEqual('third');
      expect(arrayList.get(middleIndex-1)).toEqual('second');
    });

    it("should insert an element at the front of the list", function() {
      arrayList.insert(0, insertedElement);
      expect(arrayList.get(0)).toEqual(insertedElement);
      expect(arrayList.get(1)).toEqual('first');
    });

    it("should insert an element at the end of the list", function() {
      var lastIndex = arrayList.size-1;
      arrayList.insert(lastIndex, insertedElement);
      expect(arrayList.get(lastIndex)).toEqual(insertedElement);
    });
  });
});
