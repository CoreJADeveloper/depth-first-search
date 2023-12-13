class Graph {
    // Initialize algorithm core data.
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let index = 0; index < v; index++) {
            this.adj[index] = [];
        }
    }

    // Create new edge.
    addEdge(v, w) {
        this.adj[v].push(w);
    }

    // Root algorithm for depth first search traversal.
    DFS(v) {
        let visited = new Array(this.V);
        for (let index = 0; index < this.V; index++) {
            visited[index] = false;
        }
        this.DFSUtil(v, visited);
    }

    // Find out visited nodes.
    DFSUtil(v, visited) {
        visited[v] = true;
        console.log(v + " ");
        for (let i of this.adj[v].values()) { // Find out adjacent nodes of the selected one.
            if (!visited[i]) { // Make the node is visited and check the adjacent nodes.
                this.DFSUtil(i, visited);
            }
        }
    }
}

let g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

g.DFS(1);