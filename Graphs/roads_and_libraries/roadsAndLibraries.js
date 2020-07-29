function initialize(n, c_lib, c_road, cities) {

    // If the cost of the road is greater than or equal to the cost of the library, build library in every city
    if (c_road >= c_lib) {
        return n * c_lib
    }

    // Just like javascript object
    let adjacencyList = new Map();

    // Add node
    function addNode(airport) {
        // Key value pairs
        adjacencyList.set(airport, [])
    }

    // Add edge, undirected
    function addEdge(origin, destination) {
        adjacencyList.get(origin).push(destination)
        adjacencyList.get(destination).push(origin)
    }

    // BFS Breadth First Search
    function bfs(start) {
        const queue = [start]
    }

    // ... best for finding the first route that exists (Going through the routes one by one)
    // DFS Depth First Search
    function dfs(start, visited, v_routes) {
        visited.add(start);
        v_routes.add(start);

        const destinations = adjacencyList.get(start);

        for (const destination of destinations) {
            if (!visited.has(destination)) {
                dfs(destination, visited, v_routes)
            }
        }

        return v_routes;

    }

    // Create graph
    for (let i = 1; i <= n; i++) {
        addNode(i)
    }

    // Add edges to the graph
    for (let i = 0; i < cities.length; i++) {
        // First is source, second is destination
        addEdge(cities[i][0], cities[i][1])
    }

    var visited = new Set();
    var list = [...adjacencyList.keys()];
    var routes = [];
    var total_cost = 0;

    // Go to each node and form a route
    list.forEach(key => {
        if (!visited.has(key)) {
            // Current node, Visited nodes tracker, Return route
            var route = dfs(key, visited, new Set())
            routes.push(new Set(route))
        }
    })

    // For each route compute cost
    routes.forEach(route => {
        total_cost += (((route.size - 1) * c_road) + c_lib)
    });

    return total_cost;
}

console.log(initialize(3, 2, 1, [ [ 1, 2 ], [ 3, 1 ], [ 2, 3 ] ] ))
console.log(initialize(6, 2, 5, [[1, 3], [3, 4], [2, 4], [1, 2], [2, 3], [5, 6]]))
