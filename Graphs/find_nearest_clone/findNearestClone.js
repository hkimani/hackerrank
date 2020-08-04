function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    // Graph define
    let graph = new Map();

    // Storing the nodes data
    let nodeData = new Map();

    // Start node
    var start;

    // Add node to graph
    function addNode(node) {
        graph.set(node, [])
    }

    // Add edge, undirected
    function addEdge(origin, destination) {
        graph.get(origin).push(destination)
        graph.get(destination).push(origin)
    }

    // Optimal for finding shortest path between to nodes
    // ... Implemented using a queue
    function bfs(start, end) {
        const visited = new Set();
        const queue = [start];
        var depth = 0;

        // While the queue is not empty
        while (queue.length > 0) {

            // The depth of the search is the first element of the queue before doing any operations
            var depth = queue[0]

            // FIFO first element in the queue is the first out
            const parent = queue.shift();
            const children = graph.get(parent);

            if (!children) {
                // No more children left to visit. 
                // ... Desired node has not been found
                return -1
            }

            for (const child of children) {

                if (nodeData.get(child) === end && child !== start) {
                    // Node has been found
                    return depth
                }

                // If child has not been visited
                if (!visited.has(child)) {
                    visited.add(child);
                    queue.push(child)
                }
            }

        }

        return -1

    }

    // Create graph
    for (let i = 1; i <= graphNodes; i++) {
        var colorId = ids[i - 1];
        nodeData.set(i, colorId);
        addNode(i);

        if (!start && colorId === val) {
            start = i
        }

    }

    // Add all the edges
    graphFrom.forEach((origin, i) => {
        var destination = graphTo[i]
        addEdge(origin, destination)
    })

    if (start) {
        return bfs(start, val)
    } else {
        return -1
    }
    

}

// Test 0
console.log('Test 0 ans: ' + findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 1, 1], 1))

console.log('\n')

// Test 1
console.log('Test 1 ans: ' + findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 3, 4], 2))

console.log('\n')

// Test 2
console.log('Test 2 ans: ' + findShortest(5, [1, 1, 2, 3], [2, 3, 4, 5], [1, 2, 3, 3, 2], 2))
