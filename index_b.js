'use strict';

var spawn = require('cross-spawn');

var args = process.argv.slice(2);
if (args.length === 0) {
  args.push("start");
}

var scriptIndex = args.findIndex(function (x) {
  return x === 'build' || x === 'eject' || x === 'start' || x === 'test';
});

var script = scriptIndex === -1 ? args[0] : args[scriptIndex];
var nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];
var commendParam = nodeArgs.concat(require.resolve('./config/' + script)).concat(args.slice(scriptIndex + 1));
console.log(commendParam);
var result = spawn.sync('node', commendParam, { stdio: 'inherit' });
console.log("start执行结果为" + result.status);

function bar() {
  var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : y;

  return [x, y];
}

var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f();

var foo = Object.freeze({ a: { b: 123 } });
foo.a.b = 456;
console.info(JSON.stringify(foo));

var a = 1,
    b = 2,
    c = 3;

console.log(a);


function f2(){
  console.log("x2");   
}
