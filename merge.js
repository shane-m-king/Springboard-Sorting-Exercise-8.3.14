function merge(arr1, arr2) {
  out = [];
  a = 0;
  b = 0;

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] <= arr2[b]) {
      out.push(arr1[a]);
      a++;
    } else {
      out.push(arr2[b]);
      b++;
    }
  }
  while (a < arr1.length) {
    out.push(arr1[a]);
    a++;
  }
  while (b < arr2.length) {
    out.push(arr2[b]);
    b++;
  }
  return out;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
  }
}

module.exports = { merge, mergeSort };
