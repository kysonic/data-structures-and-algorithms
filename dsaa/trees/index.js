class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    let temp = this.root; 
    while (true) {
      if (temp.value === value) {
        return undefined;
      }
      if (temp.value < value) {
        if (!temp.right) {
          temp.right = new Node(value);
          return this;
        } else {
          temp = temp.right;
        }
      } else if (temp.value > value) {
        if (!temp.left) {
          temp.left = new Node(value);
          return this;
        } else {
          temp = temp.left;
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    }

    let temp = this.root; 

    while (temp) {
      if (temp.value === value) {
        return true;
      }
      if (temp.value < value) {
        temp = temp.right;
      } else if (temp.value > value) {
        temp = temp.left;
      }
    }

    return false;
  }

  minValueNode(root) {
    let temp = root; 

    while (temp.left) {
      temp = temp.left;
    }

    return temp;
  }


}
let myTree = new BST()

myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

console.log("minValueNode from root:", myTree.minValueNode(myTree.root).value);
console.log("\nminValueNode from root.right:", myTree.minValueNode(myTree.root.right).value);
