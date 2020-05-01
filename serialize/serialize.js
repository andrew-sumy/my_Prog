const doStuff = obj2Flatten => {

  const result = [];
  const flattenTag =
    (path, obj) => Object
      .keys(obj)
      .map(key => {
        const val = obj[key];
        const xType = typeof val;
        const valPath = `${path}.${key}`;

        switch (xType) {
          case 'string':
          case 'number':
            return `${valPath} = ${val}`;
          case 'object':
            return flattenTag(valPath, val);
        }
      });

  console.log(flattenTag('root>', obj2Flatten));

  return 'x';
};

module.exports = { doStuff };
