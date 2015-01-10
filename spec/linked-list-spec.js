var LinkedList = require('../linked-list.js');
var MyNode = require('../my-node.js');

describe("Linked List", function() {
  describe("#insertFirst", function() {
    var linkedList = new LinkedList();
    var el = 'element';

    it("should insert an element at the front of an empty list", function() {
      linkedList.insertFirst(el);

      expect(linkedList.head.value).toEqual(el);
    });

    it("should unshift an element at the front of a non-empty list", function() {
      var el2 = 'element2';

      linkedList.insertFirst(el);
      linkedList.insertFirst(el2);

      expect(linkedList.head.value).toEqual(el2);
      expect(linkedList.head.next.value).toEqual(el);
    });
  });

  describe("#removeFirst", function() {
    var linkedList = new LinkedList();
    var el = 'element';
    var el2 = 'element2';

    it("should remove the element at the front of the list", function() {
      linkedList.insertFirst(el);
      linkedList.removeFirst();
      expect(linkedList.head).toBe(null);
    });

    it("should shift the first element from the front of the list", function() {
      linkedList.insertFirst(el);
      linkedList.insertFirst(el2);
      linkedList.removeFirst();

      expect(linkedList.head.value).toEqual(el);
    });
  });

  describe("#insertLast", function() {
    var linkedList = new LinkedList();
    var el = 'element';
    var el2 = 'element2';

    it("should insert an element at the end of an empty list", function() {
      linkedList.insertLast(el);
      expect(linkedList.tail().value).toEqual(el);
    });

    it("should insert an element at the end of non-empty list", function() {
      linkedList.insertLast(el2);
      expect(linkedList.tail().value).toEqual(el2);
    });
  });

  describe("removeLast", function() {
    var linkedList = new LinkedList();
    var el = 'element';
    var el2 = 'element2';

    it("should pop the last element from the list with only one element", function() {
      linkedList.insertLast(el);
      linkedList.removeLast(el);
      expect(linkedList.head).toBe(null);
    });

    it("should pop the last element from the list with only one element", function() {
      linkedList.insertLast(el);
      linkedList.insertLast(el2);
      linkedList.removeLast(el);
      expect(linkedList.tail().value).toBe(el);
    });
  });
});
