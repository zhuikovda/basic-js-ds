const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    this.root = null;
    return this.root
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here    
      let newNode = new Node(data);
      if(this.root) {
        this.root = newNode;
        return;
      }

      let currNode = this.root;
      while(currNode) {
        if(newNode.value < currNode.value) {
          if(!currNode.left) {
            currNode.left = newNode;
            return;
          }
          currNode = currNode.left;
        } else {
          if(!currNode.right) {
            currNode.right = newNode;
            return;
          }
          currNode = currNode.right;
        }
      }      
    }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};