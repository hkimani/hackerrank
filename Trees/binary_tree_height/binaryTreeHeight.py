class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None
        self.level = None

    # Return value of the object. What we want to see instead of the object location
    def __str__(self):
        return str(self.info)


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def create(self, val):
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root

            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break


def height(root):
    left_depth = 0
    right_depth = 0

    if root == None:
        return 0
    else:
        if (root.left):
            current = root
            # Get Max left subtree nodes
            while True:
                if current and current.left:
                    current = current.left
                    left_depth += 1
                elif current and current.right:
                    current = current.left
                    left_depth += 1
                else:
                    break

        if root.right:
            current = root
            # Get Max right subtree nodes
            while True:
                if current and current.right:
                    current = current.right
                    right_depth += 1
                elif current and current.left:
                    current = current.left
                    right_depth += 1
                else:
                    break

    return max(left_depth, right_depth)


tree = BinarySearchTree()

arr = [3, 5, 2, 1, 4, 6, 7]
# arr = [3, 1, 7, 5, 4]
# arr = [4, 1, 8, 10, 9, 3]

for i in range(len(arr)):
    tree.create(arr[i])

print(height(tree.root))
