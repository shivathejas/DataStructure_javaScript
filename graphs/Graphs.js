var Vertex = require('./Vertex');
class Graphs{
    constructor(){
        this.adjVertex = new Map();
    }

    set setAdjvertex(adjVertex){
        this.adjVertex = adjVertex;
    }
    get getAdjVertex(){
        return this.adjVertex;
    }

    addVertex(label){
        var vertex1 = new Vertex(label);
        this.adjVertex.set(vertex1,new Array());
    }
    addEdge(label1,label2){
        var vertex1 = new Vertex(label1);
        var vertex2 = new Vertex(label2);
        var arr1 =new Array(this.adjVertex.get(vertex2));
        arr1.push(vertex1);
        var arr2 =new Array(this.adjVertex.get(vertex1));
        arr2.push(vertex2);
        this.adjVertex.set(vertex2,arr1);
        this.adjVertex.set(vertex1,arr2);
    }
    displayAdjacentTo(label){
        var vertex = new Vertex(label);
        //console.log(this.adjVertex);
        console.log("adjVertex is of "+ typeof this.adjVertex);
        for(var data of this.adjVertex.keys()){
            console.log(data.label);
        }
        console.log("this.adjVertex.has(vertex)+ "+this.adjVertex.has(vertex))
        if(this.adjVertex.has(vertex)){
            console.log(this.adjVertex.get(vertex));
        }
    }
}

var graphs  =new Graphs();

        graphs.addVertex("1");
		graphs.addVertex("2");
		graphs.addVertex("3");
		graphs.addVertex("4");
		graphs.addVertex("5");
//		adding edges
		graphs.addEdge("1","3");
		graphs.addEdge("1","4");
		graphs.addEdge("3","4");
		graphs.addEdge("5","3");
		graphs.addEdge("4","5");
		graphs.addEdge("2","3");
        graphs.addEdge("2","5");
        // graphs.displayAdjacentTo("1");
        console.log(graphs.adjVertex);