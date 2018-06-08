Add your answers to the questions below.

1. What is the runtime complexity of your `depthFirstForEach` method?
n because we are traversing the entire tree.  As new node get added to the tree, the number of additional times we need to call 'depthFirstForEach' increases linearly
2. What is the space complexity of your `depthFirstForEach` function?
n, iterative or recurse, still n

3. What is the runtime complexity of your `breadthFirstForEach` method?
n by same logic as depth first
4. What is the space complexity of your `breadthFirstForEach` method? 
n because every node gets added to queue.  worst case, we might have a bunch of nodes in queue.

5. What is the runtime complexity of your `heapsort` function?
2n log n because we have two loops, each invoking log n routines.

6. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?

n for space.  1 if we only altered the input without returning array.
