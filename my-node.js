var MyNode = function(value) {
  this.next = null;
  this.value = value;
};

MyNode.prototype.insertAfter = function(otherNode) {
  this.next = otherNode;
};

MyNode.prototype.removeAfter = function() {
  this.next = null;
};

module.exports = MyNode;
