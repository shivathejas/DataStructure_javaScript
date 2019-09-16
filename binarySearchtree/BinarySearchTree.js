var Node = require('./Node');

class BinrySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        this.root = this.insertRecursive(this.root,value) ;
    }
    insertRecursive(root,value){
        if(root == null){
            root = new Node(value);
            return root;
        }
        if(value <= root.data){
            root.left = this.insertRecursive(root.left,value);
        }else{
            root.right = this.insertRecursive(root.right,value);
        }
        return root;
    }
    inOrder(){
        this.inOrderRecursive(this.root);
    }
    inOrderRecursive(root){
        if(root.left!=null){
            this.inOrderRecursive(root.left);
        }
        console.log(root.data);
        if(root.right!=null){
            this.inOrderRecursive(root.right);
        }
    }
    contains(value){
       return this.containsRecursive(this.root,value);
    }
    containsRecursive(root,value){
        var result = false;
        if(root == null){
            result = false;
        }else if(value<root.data){
            result = this.containsRecursive(root.left,value);
        }else if(value>root.data){
            result = this.containsRecursive(root.right,value);
        }else{
            result = true;
        }
        return result;
    }
    delete(value){
        this.root = this.deleteRecursive(this.root,value);
    }
    deleteRecursive(root,value){
        if(root==null){
            return root;
        }else if(value<root.data){
            root.left = this.deleteRecursive(root.left,value);
        }else if(value>root.data){
            root.right = this.deleteRecursive(root.right,value);
        }else{
            if(root.left==null){
                return root.right;
            }
            if(root.right==null){
                return root.left;
            }

            root.data = this.minValue(root.right);
            root.right = this.deleteRecursive(root.right,root.data);
        }
        return root;
    }
    minValue(root){
        var minV=root.data;
        while(root.left!=null){
            minV = root.left.data;
            root = root.left;
        }
        return minV;            
    }
    max(){
        return this.maxRecursive(this.root);
    }
    maxRecursive(root){
        if(root.right!=null){
          return  this.maxRecursive(root.right);
        }
        return  root.data;
    }
    size(){
        return this.sizeRecursive(this.root);
    }
    sizeRecursive(root){
        if(root == null){
            return 0;
        }else{
            return this.sizeRecursive(root.left)+1+this.sizeRecursive(root.right);
        }
    }
    maxdepth(){
        return this.maxdepthRecursive(this.root);
    }
    maxdepthRecursive(root){
        if(root == null){
            return 0;
        }
        else{
            var lDepth = this.maxdepthRecursive(root.left);
            var rDepth = this.maxdepthRecursive(root.right);

            if(lDepth>rDepth){
                return lDepth+1;
            }else{
                return rDepth+1;
            }
        }
    }
}

var binarySearchTree = new BinrySearchTree();

binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);
binarySearchTree.insert(2);
binarySearchTree.insert(7);
binarySearchTree.insert(12);
binarySearchTree.insert(1789);
//binarySearchTree.insert(17);
console.log('inorder traversel');
binarySearchTree.inOrder();
console.log("BSt contaiins value? "+binarySearchTree.contains(1500));
binarySearchTree.delete(5);
console.log("after deleting a node");
binarySearchTree.inOrder();
console.log("max value: "+binarySearchTree.max());
console.log("size of the tree: "+binarySearchTree.size());
console.log("max Depth: "+binarySearchTree.maxdepth());