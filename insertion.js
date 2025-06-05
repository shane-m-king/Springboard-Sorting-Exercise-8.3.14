function insertionSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let temp = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[i]) {
          temp = arr[j];
          arr.splice(j, 1, arr[i]);
          arr.splice(i, 1, temp);
        }
      }
    }
  }
  return arr;
}

console.log(insertionSort([2, 7, 4, 9, 3, 8]));
module.exports = insertionSort;
