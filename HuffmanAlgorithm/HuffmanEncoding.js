var HuffmanNode = require('./HuffmanNode');
var utils = require('util');
class HuffmanEncoding{
    constructor(){
        this.root = null;
    }
    mainFunction(){
        var ch= ['a','b','c','d','e','f'];
        var  data = [5,9,12,13,16,45];
        var q = new Array();
        for(let i in ch){
            var node = new HuffmanNode();
            node.data = data[i];
            node.char = ch[i];
            node.left = null;
            node.right = null;
            q.push(node);
        }
        var secondQ = new Array();
        while(q.length>1){
            var x = q.shift();
            var y = q.shift();

            var f = new HuffmanNode();

            f.data = x.data+y.data;
            f.char = '-';
            f.left = x;
            f.right = y;
            this.root = f;
            q
            console.log(this.root);
            // for(var value of q){
            //     if(this.root.data > value.data){

            //     }else{

            //     }

            // }
        }
        this.printNode(this.root,"");
    }
    printNode(root,s){
        if(root.left == null &&
            root.right == null &&
            utils.isString(root.char)){
                console.log(root.char+": "+s);
                return;
            }
            this.printNode(root.left,s+"0");
            this.printNode(root.right,s+"1");
    }
}
var huffEncod = new HuffmanEncoding();
huffEncod.mainFunction();