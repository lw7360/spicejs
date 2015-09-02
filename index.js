function spice(arr, slice) {
  var isString = false;
  if (typeof arr === 'string') {
    arr = arr.split('');
    isString = true;
  }

  var spice = arr.slice(0);
  slice = slice.split(':');

  if (slice.length === 2) { // Standard slice
    if (slice[0] && slice[1]) {
      spice = arr.slice(slice[0], slice[1]);
    } else if (!slice[0] && slice[1]) {
      spice = arr.slice(0, slice[1]);
    } else if (!slice[1] && slice[0]) {
      spice = arr.slice(slice[0]);
    }
  } else if (slice.length === 3) { // Extended slice
  
  }

  if (isString) {
    spice = spice.join(''); 
  }

  return spice;
}

module.exports = spice;
