function isInteger(str) {
  var n = ~~Number(str);
  return String(n) === str;
}

function spice(arr, slice) {
  var isString = false;
  if (typeof arr === 'string') {
    arr = arr.split('');
    isString = true;
  }

  var spiced = arr.slice(0);
  slice = slice.split(':');

  // Check to make sure slice indices are integers
  for (var i = 0; i < slice.length; i++) {
    if (slice[i] !== '' && !isInteger(slice[i])) {
      console.log(slice[i])
      throw 'slice indices must be integers or blank';
    }
  }


  if (slice.length === 2) { // Standard slice
    if (slice[0] && slice[1]) {
      spiced = arr.slice(slice[0], slice[1]);
    } else if (!slice[0] && slice[1]) {
      spiced = arr.slice(0, slice[1]);
    } else if (!slice[1] && slice[0]) {
      spiced = arr.slice(slice[0]);
    }
  } else if (slice.length === 3) { // Extended slice
    sliced = spice(arr, slice[0] + ':' + slice[1]);
    var step = slice[2];
    if (step === 0) {
      throw 'slice step cannot be zero'
    } else if (step > 0) {
    } else {
    }
  }

  if (isString) {
    spiced = spiced.join(''); 
  }

  return spiced;
}

module.exports = spice;
