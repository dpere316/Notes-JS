class Node {

// constructors initialize data and next 
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }

//   Method sets the next node to point 
setNextNode(node) 
{
  if(node instanceof Node || node === null)
  {
    this.next = node
  }
  else {
    throw new Error ('error')
  }

}

getNextNode(){
    return this.next
  }

}

const firstNode = new Node(5); // insantiates a new node called firstNode with data  == 5

console.log(firstNode.data); // returns 5 because node is created with a value of 5
console.log(firstNode.next); // Return null because the default next node is set to null

const firstNode = new Node("I am an instance of a Node!");

const secondNode = new Node(); // insantiates a new node called secondNode

firstNode.setNextNode(secondNode); // The first-node points to the second-node

console.log(firstNode); // returns an object of the Node

console.log(firstNode.getNextNode()) // return the next node

module.exports = Node;

// What properties makea Node Useful?
// Data helps to store information, and the next is a link to other Nodes for easier traversal

// When instances of Nodes are created, they are orphan nodes. The data property is set to the constructor argument, but the next node is null. 

// How do you determine if nodes are orphan nodes? 
// There are no nodes that point to it. 