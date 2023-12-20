const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor( ) {
    this.rootVar = null;
  }

  root() {
    return this.rootVar;
  }

  add(data) {
    this.rootVar = addElement(this.rootVar, data);

    function addElement(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return search(this.rootVar, data);

    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
  }

  find(data) {
    return findData(this.rootVar, data);

    function findData(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootVar = removeElement(this.rootVar, data);

    function removeElement(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeElement(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeElement(node.right, data);
        return node;
        } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeftSide = node.right;
        while (maxLeftSide.left) {
          maxLeftSide = maxLeftSide.left
        }
        node.data = maxLeftSide.data;
        node.rigt = removeElement(node.right, maxLeftSide.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootVar) {
      return;
    }

    let node = this.rootVar;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootVar) {
      return;
    }

    let node = this.rootVar;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};