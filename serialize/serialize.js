const doStuff = obj2Flatten => {

  const result = [];
  const flattenTag =
    (path, obj) => Object.keys(obj)
      .forEach(key => {
        const val = obj[key];
        const xType = typeof val;
        const valPath = `${path}.${key}`;

        switch (xType) {
          case 'string':
          case 'number':
            result.push(`${valPath} = ${val}`);
            break;
          case 'object':
            flattenTag(valPath, val);
            break;
        }
      });

  flattenTag('root>', obj2Flatten);

  return result.join('\n');
};

module.exports = { doStuff };
