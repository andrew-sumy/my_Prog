const doStuff = obj2Flatten => {

  const flattenTag =
    (path, obj) => {
      const result = [];

      Object
        .keys(obj)
        .forEach(key => {
          const val = obj[key];
          const xType = typeof val;
          const valPath = `${path}.${key}`;

          switch (xType) {
            case 'string':
              result.push(`${valPath} = "${val}"`);
              break;
            case 'number':
              result.push(`${valPath} = ${val}`);
              break;
            case 'object':
              result.push(...flattenTag(valPath, val));
          }
        });

      return result;
    }

  // console.log(flattenTag('root>', obj2Flatten));

  return flattenTag('root>', obj2Flatten).join('\n');
};

module.exports = { doStuff };
