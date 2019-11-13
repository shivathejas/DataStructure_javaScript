// var binarySearchTree  =require('./binarySearchtree/BinarySearchTree');
var express = require('express');
var app = express();
// var graphs = require('./graphs/Graphs');
var huffEncode = require('./HuffmanAlgorithm/HuffmanEncoding');
// app.get('/asasa', (req,res)=>{
//     console.log(req.protocol);
//     res.send('hihihihi')
// });
// let isMatchingBrackets = function (str) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }

//     for (let i = 0; i < str.length; i++) {

//         if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
//             stack.push(str[i]);
//         }
//         else {
//             let last = stack.pop();
//             if (str[i] !== map[last]) {
//                 console.log(map[last]);
//                 return "NO"};
//         }
//     }
//         if (stack.length !== 0) {return "NO"};

//     return "YES";
// }

// console.log(isMatchingBrackets("{}[]()")); 
// console.log(isMatchingBrackets("{[(])}"));

app.listen(8000);