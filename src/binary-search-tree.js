const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }
  
  root() {
    return this.treeRoot;
  }

  add( data ) {
    const newNode = new Node(data);
    if (!this.treeRoot) {
      this.treeRoot = newNode;
    } else {
      this._insertNode(this.treeRoot, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  has( data ) {
    return !!this.find(data);
  }

  find( data ) {
    return this._searchNode(this.treeRoot, data);
  }

  _searchNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._searchNode(node.left, data);
    } else {
      return this._searchNode(node.right, data);
    }
  }

  remove( data ) {
    this.treeRoot = this._removeNode(this.treeRoot, data);
  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      const minRight = this._findMinNode(node.right);
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }

  min() {
    if (!this.treeRoot) {
      return null;
    }
    const minNode = this._findMinNode(this.treeRoot);
    return minNode ? minNode.data : null;
  }

  _findMinNode(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }

    let node = this.treeRoot;
    while (node && node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};