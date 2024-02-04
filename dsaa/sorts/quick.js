function pivot(arr, pivotIndex = 0, endIndex = arr.length - 1) {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex + 1; i <= endIndex; i++) {
      if (arr[i] < arr[pivotIndex]) {
          swapIndex++;
          [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      }
  }

  [arr[swapIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[swapIndex]];

  return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
      let pivotIndex = pivot(arr, start, end);
      quickSort(arr, start, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}