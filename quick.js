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

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let index = pivot(arr);

  const left = arr.slice(0, index);
  const right = arr.slice(index + 1);

  const newLeft = quickSort(left);
  const newRight = quickSort(right);

  return [...newLeft, arr[index], ...newRight];
}

module.exports = { pivot, quickSort };
