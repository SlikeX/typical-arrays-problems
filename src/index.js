
exports.min = function min(array = []) {
  let minimum = array[0];
  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    if (minimum < a) {
      minimum = minimum
    } else {
      minimum = a
    }
  }
  if (minimum === undefined) { return 0 } else {
    return minimum;
  }
}


exports.max = function max(array) {
  let maximum = 0
  if (array === undefined || array.length === 0) {
    return 0
  } else {
    array.forEach(a => {
      maximum < a ? maximum = a : ''
    });
  }
  return maximum
}

exports.avg = function avg(array) {
  let a = 0;
  if (array === undefined || array.length === 0) {
    return 0
  }
  else {
    for (let i = 0; i < array.length; i++) {
      a += array[i] / array.length;
    }
    return a.toFixed(2);
  }
}