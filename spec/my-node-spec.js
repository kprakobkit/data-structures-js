var MyNode = require('../my-node.js');

describe("Node", function() {
  describe("#new", function() {
    var el = 'element';
    var node = new MyNode(el);

    it("should instantiate a new node containing the specified element", function() {
      expect(node.value).toEqual(el);
    });
  });

  describe("#insertAfter", function() {
    var el = 'element';
    var el2 = 'element2';
    var node = new MyNode(el);
    var otherNode = new MyNode(el2);

    it("should insert a node after the current node", function() {
      node.insertAfter(otherNode);
      expect(node.next).toEqual(otherNode);
    });
  });

  describe("#removeAfter", function() {
    var el = 'element';
    var el2 = 'element2';
    var node = new MyNode(el);
    var otherNode = new MyNode(el2);

    it("should remove the node that the current node points to", function() {
      node.insertAfter(otherNode);
      node.removeAfter();
      expect(node.next).toBe(null);
    });
  });
});
