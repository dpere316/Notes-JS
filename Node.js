class Node {

// constructors initialize data and next 
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }

//   Method sets the next node to point 
  setNextNode(node) {
    this.next = node;
  }
}

const firstNode = new Node(5); // insantiates a new node called firstNode with data  == 5

console.log(firstNode.data); // returns 5 because node is created with a value of 5
console.log(firstNode.next); // Return null because the default next node is set to null

const firstNode = new Node("I am an instance of a Node!");

const secondNode = new Node(); // insantiates a new node called secondNode

firstNode.setNextNode(secondNode); // The first-node points to the second-node

console.log(firstNode); // returns an object of the Node

module.exports = Node;
