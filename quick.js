/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  const pivotIndex = pivot(arr, left, right);

  quickSort(arr, left, pivotIndex - 1);

  quickSort(arr, pivotIndex + 1, right);

  return arr;
}

console.log(
  quickSort([45, 245, 57, 8958, 2345, 54, 23, 41, 73, 23, 3425, 74576, 2])
);

module.exports = { pivot, quickSort };
