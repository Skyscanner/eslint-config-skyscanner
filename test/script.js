const deps = require('../package.json').peerDependencies; 

console.log(Object.keys(deps).reduce((acc, key) => `${acc} ${key}@${deps[key]}`, '').trim());
