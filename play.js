

//const stdin = process.stdin;
const {connect}=require('./client');
const {setupInput}=require('./input');
console.log("Connecting ...");


setupInput(connect());


