class Node {
    constructor(data, leftChild, rightChild) {
        this.parent = null; // Use full for walking through a tree
        this.data = data;
        this.children = [leftChild, rightChild]
    }

    /* Children are objects stored in arrays */

    // In order insertion
    insert(value) {

        // Checking if we have the Root. Create id null
        if (root.data === null) {
            root.data = value;
            return
        }

        // If value is less than current node value, insert to left child
        if (value <= this.data) {
            // If no left child exists
            if (this.children[0] === null) {
                // create left child
                this.children[0] = new Node(value, null, null)
            } else {
                // Insert value to left child
                this.children[0].insert(value)
            }
        // Else If value is greater than current node value, insert to right child
        } else {
            // If no right child exists
            if (this.children[1] === null) {
                // create right child
                this.children[1] = new Node(value, null, null)
            } else {
                // Insert value to right child
                this.children[1].insert(value);
            }

        }
    }

    // Find node, returns true if node is found
    contains(value) {
        // If the current node has the data we're looking for, we've found it
        if (value === this.data) {
            return true;
        
        // Value is less than the current data we have, check left child
        } else if (value < data) {
            // If there's no left child. Does not contain value
            if (this.children[0] === null) {
                return false;
            // If there's a left child. Recurse
            } else {
                return this.children[0].contains(value);
            }
        // Value is greater than current node data, check right child
        } else {
            // If there's no right child. Does not contain value
            if (this.children[1] === null) {
                return false;
            // If there's right child. Recurse
            } else {
                return this.children[1].contains(value);
            }
        }
    }

    // In order Traversall of all nodes
    traverse() {
        if (this.children[0] !== null) {
            this.children[0].traverse()
        }

        // Print out current node data
        console.log(this.data);

        if (this.children[1] !== null) {
            this.children[1].traverse()
        }
    }

}

// Set the root
var root = new Node(null, null, null);

// Self calling function
(function test() {

    // Create tree with Randomly generated numbers
    // ... An an
    for (let i = 0; i < 100; i++) {
        let value = Math.round(i * Math.random() * 100) 
        root.insert(value, null, null)
    }

    // Inorder traversal (from smallest to largest)
    // ... This returns a sorted list of values in the tree
    // ... Basically sorts the tree values
    root.traverse()

}) ()