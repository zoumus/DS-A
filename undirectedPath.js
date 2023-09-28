// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

// test_00:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'j', 'm'); // -> true
// test_01:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'm', 'j'); // -> true
// test_02:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'l', 'j'); // -> true
// test_03:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'k', 'o'); // -> false
// test_04:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'i', 'o'); // -> false
// test_05:
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];


// undirectedPath(edges, 'a', 'b'); // -> true
// test_06:
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'a', 'c'); // -> true
// test_07:
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'r', 't'); // -> true
// test_08:
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'r', 'b'); // -> false
// test_09:
// const edges = [
//   ['s', 'r'],
//   ['t', 'q'],
//   ['q', 'r'],
// ];

// undirectedPath(edges, 'r', 't'); // -> true


const undirectedPath = (edges, nodeA, nodeB) => {
    let graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
};
  
function buildGraph(edges) {
    let graph = {};

    for(let edge of edges) {
        let [a, b] = edge;
        
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

function hasPath(graph, nodeA, nodeB, newSet) {
    if(nodeA === nodeB) return true;

    if(newSet.has(nodeA)) return false;
    newSet.add(nodeA);

    for(let neighbor of graph[nodeA]) {
        if(hasPath(graph, neighbor, nodeB, newSet) === true) return true;
    }
    return false;
}