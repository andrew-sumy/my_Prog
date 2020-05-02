const flattenTag = (path, obj, c) => {
  const result = [];

  Object
    .keys(obj)
    .forEach(key => {
      const val = obj[key];
      const xType = typeof val;
      const valPath = `${path}${Array.isArray(obj) ? `[${key}]` : `.${key}`}`;

      switch (xType) {
        case 'string':
          result.push(`${valPath} = "${val}"`);
          break;
        case 'number':
          if (c)
            result.push(...c(valPath, val, key));
          else
            result.push(`${valPath} = ${val}`);
          break;
        case 'object':
          result.push(...flattenTag(valPath, val, c));
      }
    });
  return result;
}

const doStuff = (obj2Flatten, c) =>
  flattenTag(
    'root>',
    obj2Flatten,
    c
  )
    .join('\n');

module.exports = { doStuff };
