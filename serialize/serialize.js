const doStuff = obj2Flatten => {

  const result = [];

  for (const x in obj2Flatten)
    result.push(`${x} <${typeof obj2Flatten[x]}>`);
  // console.log(x, typeof obj2Flatten[x], obj2Flatten[x]);

  // console.log(result);
  console.log(result.join('\n'));

  return 'obj.prop[idx].nestedProp = "val"';
};

module.exports = { doStuff };
