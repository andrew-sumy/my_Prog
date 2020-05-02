const structured = {
  bebe: 3,
  meme: 'duparin',
  vege: {
    also: 'some other',
  },
  many: ['12 nigaz', 'malion', 'doomed', { description: 'unexpected object', moreProp: 'random val' }],
  deepStructure: {
    plainProp: 455,
    nestedObj1: {
      x: 132,
      y: 200,
    },
    nestedObj2: {
      x: 134,
      y: 204,
    },
  },
};

const { doStuff } = require('./serialize/serialize');

console.log(doStuff(structured));
console.log('-------');
console.log(doStuff(
  structured,
  (path, value) => ['да этож намбер!!!!', value, path, 'ну все. давайте дальше'],
));
console.log('-------');
console.log(doStuff(
  structured,
  (path, value, key) => [`${key} property in ${path} objext is: ${value} number`],
));
