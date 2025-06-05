function selectionSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let min = 0;
  let swap = false;
  let pos = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    swap = false;
    min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        pos = j;
        swap = true;
      }
    }
    if (swap === true) {
      temp = arr[i];
      arr.splice(i, 1, arr[pos]);
      arr.splice(pos, 1, temp);
    }
  }
  return arr;
}

console.log(selectionSort([43, 56, 26, 14, 2, 87, 463, 235, 354, 23, 9, 90]));

module.exports = selectionSort;
