const flattenTag = (path, obj) => {
  const result = [];

  Object
    .keys(obj)
    .forEach(key => {
      const val = obj[key];
      const xType = typeof val;

      // const valPath =
      //   Array.isArray(obj)
      //     ?
      //     `${path}[${key}]`
      //     :
      //     `${path}.${key}`;
      const valPath = `${path}${Array.isArray(obj) ? `[${key}]` : `.${key}`}`;


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

const doStuff = obj2Flatten =>
  flattenTag('root>', obj2Flatten).join('\n');

module.exports = { doStuff };
