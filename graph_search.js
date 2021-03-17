function graphSearch(edges, start, end) {
    // Build Graph
    const adjList = {};
    edges.forEach(([u, v]) => {
        if (!adjList[u]) {
            adjList[u] = [];
        }
        if (!adjList[v]) {
            adjList[v] = [];
        }
        adjList[u].push(v);
    });

    // Use BFS to search graph
    const visited = {};
    const q = [start];
    visited[start] = true;

    while (q.length) {
        const u = q.pop();
        if (u === end) return true;
        adjList[u].forEach((v) => {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        });
    }

    return false;
}

module.exports = {
    graphSearch,
};
