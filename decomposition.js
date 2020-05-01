const structured = {
  bebe: 3,
  meme: 'duparin',
  vege: {
    also: 'some other',
  },
  many: ['12 nigaz', 'malion', 'doomed'],
};

const prop1 = structured.vege.also;
const prop2 = structured.many[1];

console.log({ prop1, prop2 });

const { vege: geve, many: nyme } = structured;
// console.log({ vege, many });
console.log({ geve, nyme });

const { vege: { also }, many: [, many2nd] } = structured;
console.log({ also, many2nd });

