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


// const x = require('./serialize/serialize');
// x.doStuff();

const { doStuff } = require('./serialize/serialize');
const result = doStuff(structured);
console.log(result);
