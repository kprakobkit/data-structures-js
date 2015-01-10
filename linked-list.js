var MyNode = require('./my-node.js');

var LinkedList = function() {
  this.head = null;
  this.size = 0;
};

LinkedList.prototype.insertFirst = function(element) {
  var oldHead;
  var node = new MyNode(element);

  if (this.head === null) {
    this.head = node;
  } else {
    oldHead = this.head;
    this.head = node;
    node.insertAfter(oldHead);
  }
  this.size++;
};

LinkedList.prototype.removeFirst = function() {
  if (this.head.next === null) {
    this.head = null;
  } else {
    var nextHead = this.head.next;
    this.head = nextHead;
  }
  this.size--;
};

LinkedList.prototype.insertLast = function(element) {
  var node = new MyNode(element);

  if (this.head === null) {
    this.head = node;
  } else {
    this.tail().next = node;
  }
  this.size++;
};

LinkedList.prototype.removeLast = function() {
  var lastNode;

  if (this.head.next === null) {
    this.head = null;
  } else {
    lastNode = this.traverseTo(this.size-2);
    lastNode.next = null;
  }
  this.size--;
};

LinkedList.prototype.tail = function() {
  var currentNode = this.head;

  while(currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  return currentNode;
};

LinkedList.prototype.traverseTo = function(index) {
  var currentNode = this.head;
  var currentIndex = 0;

  while(currentIndex < index) {
    currentNode = currentNode.next;
    currentIndex++;
  }

  return currentNode;
};

module.exports = LinkedList;
