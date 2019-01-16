'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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


var f2 = function f2() {
  console.log("f2");
};

var _ = 1,
    x = _ === undefined ? f2() : _;
var _tab = { tab: 123 },
    tab2 = _tab.tab;

console.log(tab2);

var obj = {
  p: ['Hello', { y2: 'World' }]
};

var p = obj.p,
    _obj$p = _slicedToArray(obj.p, 2),
    x2 = _obj$p[0],
    y2 = _obj$p[1].y2;

var x3 = void 0;
var _x3 = { x3: 1 };
x3 = _x3.x3;

console.log(x3);

for(let i=0;i<12;i++){
  console.log(i.padStart(2,'0'));
}