// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    var arrayString = '[';
    for (var i = 0; i < obj.length; i++) {
      arrayString += stringifyJSON(obj[i]) + ',';
    }
    return arrayString.slice(0, Math.max(arrayString.length - 1, 2)) + ']';
  } else /*objects*/{
    var objectString = '{';
    for (var key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        objectString += ('"' + key + '"' + ':' + stringifyJSON(obj[key]) + ',');
      }
    }
    return objectString.slice(0, Math.max(objectString.length - 1, 2)) + '}';
  }
};
