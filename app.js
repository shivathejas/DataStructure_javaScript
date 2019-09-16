//var LinkedList = require('./linkedList/LinkedList');
//var Stack = require('./stack/Stack');
//var Queue = require('./queue/Queue');
//var BinarySearchTree = require('./binarySearchtree/BinarySearchTree');
//var BubbleSort = require('./sorting/BubbleSort');
var SelectionSort = require('./sorting/SelectionSort');
var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/first',(req,res)=>{
    res.render("first");
});

app.listen(8000,()=> console.log('listening to 8000'));