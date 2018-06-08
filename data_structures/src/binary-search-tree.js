class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;

    this.queue = [];
  }

  depthFirstForEach(cb) {

    function search(node) {
      if (node === null) return

      cb(node.value);

      search(node.left);
      search(node.right);
    }

    search(this);
  }

  breadthFirstForEach(cb) {
    let currentNode;
    this.queue.push(this);

    while (this.queue.length > 0) {
      currentNode = this.queue[0]
      cb(currentNode.value);
      if (currentNode.left != null) this.queue.push(currentNode.left);
      if (currentNode.right != null) this.queue.push(currentNode.right);

      this.queue.shift();
    }
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;
