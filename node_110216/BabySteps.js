//console.log(process.argv);

// The process.argv property returns an array containing the command line
// arguments passed when the Node.js process was launched.
var args = process.argv;
//console.log(args);

// From 2 to args.length
// The splice() method changes the content of an array by removing existing
// elements and/or adding new elements.
args = args.splice(2, args.length);
//console.log(args);

// The reduce() method applies a function against an accumulator and each value
// of the array (from left-to-right) to reduce it to a single value.
var answer = args.reduce(function(a,b){
  return +a + +b;
});

console.log(answer);
