
const spawn = require('cross-spawn');

const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
  x => x === 'build' || x === 'eject' || x === 'start' || x === 'test'
);

const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];
const commendParam = nodeArgs.concat(require.resolve('./config/' + script))
        .concat(args.slice(scriptIndex + 1));
console.log(commendParam);
const result = spawn.sync(
      'node',
      commendParam,
      { stdio: 'inherit' }
    );
console.log("start执行结果为" + result.status);

function bar(y=1, x=y){
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

const foo = Object.freeze({a:{b:123}});
foo.a.b = 456 
console.info(JSON.stringify(foo));