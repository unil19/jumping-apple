'use strict';

var spawn = require('cross-spawn');

var args = process.argv.slice(2);

var scriptIndex = args.findIndex(function (x) {
  return x === 'build' || x === 'eject' || x === 'start' || x === 'test';
});

var script = scriptIndex === -1 ? args[0] : args[scriptIndex];
var nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];
var commendParam = nodeArgs.concat(require.resolve('./config/' + script)).concat(args.slice(scriptIndex + 1));
console.log(commendParam);
var result = spawn('node', commendParam, { stdio: 'inherit' });
console.log("start执行结果为" + result.status);
