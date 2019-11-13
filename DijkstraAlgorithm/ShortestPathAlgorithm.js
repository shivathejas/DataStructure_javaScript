// 1) Create a set sptSet (shortest path tree set) that keeps track of vertices included in shortest path tree, i.e., whose minimum distance from source is calculated and finalized. Initially, this set is empty.
// 2) Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first.
// 3) While sptSet doesn’t include all vertices
// ….a) Pick a vertex u which is not there in sptSet and has minimum distance value.
// ….b) Include u to sptSet.
// ….c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v.
class ShortestpathAlgorithm{
    constructor(){
        this.V = 9;
    }
    dijkstra(graph,src){
        var dist = new Array();
        var sptSet = new Array();
        for(var i=0;i<this.V;i++){
            dist[i] = Number.MAX_VALUE;
            sptSet[i] = false;
        }
        dist[src]=0;
        for(var count=0;count<this.V;count++){
            var u = this.minDistance(dist,sptSet);
            sptSet[u] = true;
            for(var v=0;v<this.V;v++){
                if(!sptSet[v] && graph[u][v]!=0 && 
                    dist[u] != Number.MAX_VALUE
                    && dist[u]+graph[u][v] < dist[v]){
                        console.log(v);
                    dist[v] = dist[u]+graph[u][v];
                }
            }
        }
        this.print(dist);
    }
    print(dist){
        console.log("shortest path output");
        for(var i=0;i<this.V;i++){
            console.log(i+"-->"+dist[i]);
        }
    }
    minDistance(dist,sptSet){
        var minIndex = -1,min=Number.MAX_VALUE;
        for(var i=0;i<this.V;i++){
            if(sptSet[i]==false && dist[i]<=min){
                min=dist[i];
                minIndex = i;
            }
        }
        return minIndex;
    }
}

var shortestpathAlgorithm = new ShortestpathAlgorithm();
var graph =[[, 4, 0, 0, 0, 0, 0, 8, 0], 
            [4, 0, 8, 0, 0, 0, 0, 11, 0], 
            [0, 8, 0, 7, 0, 4, 0, 0, 2], 
            [0, 0, 7, 0, 9, 14, 0, 0, 0], 
            [0, 0, 0, 9, 0, 10, 0, 0, 0], 
            [0, 0, 4, 14, 10, 0, 2, 0, 0], 
            [0, 0, 0, 0, 0, 2, 0, 1, 6], 
            [8, 11, 0, 0, 0, 0, 1, 0, 7], 
            [0, 0, 2, 0, 0, 0, 6, 7, 0]];
shortestpathAlgorithm.dijkstra(graph,0);