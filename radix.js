function radixSort(arr) {
  let max = -Infinity;
  let radArray = arr;
  const buckets = [[], [], [], [], [], [], [], [], [], []];

  for (let i = 0; i < radArray.length; i++) {
    if (radArray[i] > max) {
      max = radArray[i];
    }
  }
  let digitCount = max.toString().length;
  for (let a = 0; a < digitCount; a++) {
    for (let b = 0; b < radArray.length; b++) {
      let digit = Number(
        String(radArray[b]).padStart(digitCount, "0")[digitCount - a - 1]
      );
      buckets[digit].push(radArray[b]);
    }
    radArray = [];
    for (let c = 0; c < buckets.length; c++) {
      for (let d = 0; d < buckets[c].length; d++) {
        radArray.push(buckets[c][d]);
      }
    }
    for (let e = 0; e < buckets.length; e++) {
      buckets[e] = [];
    }
  }

  return radArray;
}

console.log(radixSort([534, 67, 2, 78, 5, 222, 0, 390, 111, 29, 9, 3554]));

module.exports = { radixSort };
