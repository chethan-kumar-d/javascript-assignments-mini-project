const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
function run(file, inputs = []) {
  const output = [];
  let calls = 0;
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), {
    console: { log: (...args) => output.push(args.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' ')) },
    prompt: () => { if (++calls > 30) throw Error('Unexpected prompt loop'); return inputs.length ? inputs.shift() : null; }
  }, { timeout: 1000 });
  return output.join('\n');
}
assert.match(run('assignments/01-variables.js'), /Skills:.*Type: object/);
assert.match(run('assignments/02-operators.js', ['100', '15']), /Total Amount to Pay: \$115/);
assert.match(run('assignments/02-operators.js', ['', '-1', '100', 'abc', '15']), /Total Amount to Pay: \$115/);
assert.match(run('assignments/02-operators.js', [null]), /cancelled/);
for (const [score, grade, status] of [[0,'F','Failed'],[59,'F','Failed'],[60,'D','Passed'],[70,'C','Passed'],[80,'B','Passed'],[85,'B','Passed'],[90,'A','Passed'],[100,'A','Passed']]) {
  const out = run('assignments/03-conditions.js', [String(score)]);
  assert.ok(out.includes(`Grade: ${grade}`) && out.includes(`Status: ${status}`));
}
for (const input of ['', '-1', '101', 'abc']) assert.match(run('assignments/03-conditions.js',[input]), /Invalid score/);
assert.match(run('assignments/03-conditions.js',[null]), /cancelled/);
assert.match(run('assignments/04-loops.js'), /Found: 12/);
assert.match(run('assignments/05-functions.js'), /Scope Test Error: ReferenceError/);
assert.match(run('assignments/06-arrays.js'), /MOUSE costs \$25/);
let out = run('project/inventory.js',['Monitor','150']);
for (const expected of ['Total Inventory Value: $975', 'Monitor ($150) -> Category: Standard', '["Mouse","Monitor"]', '$921.38']) assert.ok(out.includes(expected), expected);
for (const [price, category] of [['0','Budget'],['49','Budget'],['50','Standard'],['499','Standard'],['500','Premium']]) assert.ok(run('project/inventory.js',['Test',price]).includes(`Category: ${category}`));
out = run('project/inventory.js',['','laptop','Monitor','-1','Monitor','abc','Monitor','150']);
assert.match(out,/Total Inventory Value: \$975/);
for(const inputs of [[null],['Monitor',null]]) assert.match(run('project/inventory.js',inputs),/Total Inventory Value: \$825/);
console.log('All verification checks passed.');
