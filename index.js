
const spawn = require('cross-spawn');

const args = process.argv.slice(2);
if(args.length===0){
	args.push("start");
}

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

let [a, b, c] = [1, 2, 3];

let f2 = ()=>{
	console.log("f2");
}

let[x=f2()]=[1];

let { tab: tab2} = {tab: 123};
console.log(tab2);

let obj = {
  p: [
    'Hello',
    { y2: 'World' }
  ]
};

let { p:p, p: [x2, { y2 }] } = obj;

let x3;
({x3} = {x3: 1});
console.log(x3);

for(let i=0;i<12;i++){
  console.log((i+1+"").padStart(2,'0'));
}

let name="Bob", time = "today";
let word = `Hello ${name}, how are you ${time}?`;
console.log(word);

function tag(stringArr, value1, value2){
  console.log(stringArr);
  console.log(value1);
  console.log(value2);
}
let a5 = 5;
let b5 = 10;
tag`Hello ${ a5 + b5 } world ${ a5 * b5 }`;