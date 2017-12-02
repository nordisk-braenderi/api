const resolve = (path, obj) => {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : undefined;
  }, obj);
};

function parseDeepInteger(path, obj) {
  if (typeof path === 'string') {
    path = path.split('.');
  }
  if (path.length > 1) {
    const p = path.shift();
    if (typeof obj[p] === 'object')
      parseDeepInteger(path, obj[p]);
  } else {
    obj[path[0]] = parseInt(obj[path[0]]);
  }
}

const parseDataIntegers = (...strings) => {
  return (hook) => {
    strings.map(string => {
      parseDeepInteger(string, hook.data);
    });
  };
};

module.exports = parseDataIntegers;
